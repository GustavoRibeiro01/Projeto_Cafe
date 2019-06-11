import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
    private camera: Camera
  ) { }

  ngOnInit() {
    this.formCadastroProduto = this.formBuilder.group({Nome: new FormControl('',Validators.required),
                                                       Descricao: new FormControl('', Validators.required),
                                                       Preco: new FormControl('', Validators.required) 
                                                      })
  }

  Cadastrar = (produto) => {

    console.log(produto)

    this.produtoservice.addProduto(produto, this.base64Image).then(
      dado => {
        this.router.navigateByUrl("/list")
      },
      err => console.log(err) 
    )
  }

  capturar = () => {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL)
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

}
