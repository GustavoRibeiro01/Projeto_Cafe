import { ItemVendido } from './item-vendido';

export interface Venda {
    id?: string;
    data: string;
    
     itensVendido: ItemVendido[];
}
