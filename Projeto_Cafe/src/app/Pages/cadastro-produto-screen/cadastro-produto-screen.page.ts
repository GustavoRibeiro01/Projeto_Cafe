import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';


import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-produto-screen',
  templateUrl: './cadastro-produto-screen.page.html',
  styleUrls: ['./cadastro-produto-screen.page.scss'],
})
export class CadastroProdutoScreenPage implements OnInit {

  formCadastroProduto: FormGroup
  base64Image = ""

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private produtoservice: ProdutoService,
    private toastCtrl: ToastController,
    private camera: Camera
  ) { }

  ngOnInit() {
    this.formCadastroProduto = this.formBuilder.group({Nome: new FormControl('',Validators.required),
                                                       Descricao: new FormControl('', Validators.required),
                                                       Preco: new FormControl('', Validators.required) 
                                                      })
  }

  ionViewDidEnter(){
    this.base64Image = "../../../assets/icon/camera.png"

    this.formCadastroProduto = this.formBuilder.group({Nome: new FormControl('',Validators.required),
                                                       Descricao: new FormControl('', Validators.required),
                                                       Preco: new FormControl('', Validators.required) 
                                                      })

  }

  Cadastrar = (produto) => {

    console.log(produto)

    this.produtoservice.addProduto(produto, this.base64Image).then(
      dado => {
        this.showToast("Produto cadastrado!")
        this.router.navigateByUrl("/list")
      },
      err => {
        this.showToast("Houve um problema!")
        console.log(err) 
      }
    )
  }

  capturar = () => {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetHeight: 500
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL)
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      this.showToast("Houve um problema!")
     });
  }

  showToast(msg){
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
