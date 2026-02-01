
import { Product, Testimonial, BlogPost, ShippingStep } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Edición Gourmet 0.5L',
    size: '500ml',
    price: 14.50,
    description: 'Nuestra botella de cristal oscuro preserva todas las notas sensoriales de la aceituna Picual recién prensada. Ideal para regalar o disfrutar en crudo.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbadcbaf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    name: 'Formato Familiar 2L',
    size: '2 Litros',
    price: 42.00,
    description: 'La esencia de nuestra familia en un formato práctico y económico. Perfecto para el consumo diario en cocinas que valoran la calidad suprema.',
    image: 'https://images.unsplash.com/photo-1541530533857-89025076e3d2?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: 'María García',
    location: 'Sevilla',
    text: 'Hacía tiempo que no probaba un aceite con tanta personalidad. Se nota el cariño de la familia en cada gota.',
    rating: 5
  },
  {
    id: 2,
    author: 'Carlos Ruiz',
    location: 'Madrid',
    text: 'El envío fue rapidísimo. El formato de 2L es perfecto para casa, aguanta el sabor fresco durante meses.',
    rating: 5
  },
  {
    id: 3,
    author: 'Elena Sanz',
    location: 'Barcelona',
    text: 'Un descubrimiento increíble. Lo uso para mis tostadas cada mañana y es una explosión de sabor.',
    rating: 5
  }
];

export const SHIPPING_STEPS: ShippingStep[] = [
  {
    title: 'Recolección Directa',
    description: 'Envasamos el aceite bajo pedido para garantizar la máxima frescura.',
    icon: 'Leaf'
  },
  {
    title: 'Embalaje Seguro',
    description: 'Utilizamos cajas reforzadas para que tu pedido llegue intacto.',
    icon: 'Package'
  },
  {
    title: 'Envío Express',
    description: 'Recibe tu pedido en 24/48 horas en cualquier punto de la península.',
    icon: 'Truck'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Los secretos de la cata de aceite',
    excerpt: 'Aprende a distinguir los matices, el amargor y el picor de un AOVE de calidad suprema.',
    date: '12 de Mayo, 2024',
    category: 'Cultura',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbadcbaf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Beneficios del AOVE en la dieta mediterránea',
    excerpt: '¿Por qué el aceite de oliva es considerado el oro líquido de nuestra salud? Te lo contamos.',
    date: '28 de Abril, 2024',
    category: 'Salud',
    image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Maridajes sorprendentes',
    excerpt: 'Descubre cómo potenciar tus platos, desde ensaladas hasta postres, con nuestro aceite.',
    date: '15 de Abril, 2024',
    category: 'Gastronomía',
    image: 'https://images.unsplash.com/photo-1518131091595-43f4444a1718?auto=format&fit=crop&q=80&w=800'
  }
];
