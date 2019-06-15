import { ItemVendido } from './item-vendido';

export interface Venda {
    id?: string;
    data: string;
    uid: string;
    
     itensVendido: ItemVendido[];
}
