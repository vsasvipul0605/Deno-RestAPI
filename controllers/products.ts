import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Product } from '../types.ts'


let products: Product[] = [
    {
        id: '1',
        name: 'product one',
        description: 'this is product one',
        price:5,
    },
    {
        id: '2',
        name: 'product two',
        description: 'this is product two',
        price:10,
    },
    {
        id: '3',
        name: 'product three',
        description: 'this is product three',
        price:15,
    }
];