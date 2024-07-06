
import './globals.css'
import { Carrousel, PlayerWedding } from './components';
import { Image } from './components/interface';
import { title } from 'process';

const firts_images: Image[] = [
  {
      image: '/assets/img/foto1.png'
  },
  {
      image: '/assets/img/foto2.png'
  },
  {
      image: '/assets/img/foto3.png'
  },
  {
      image: '/assets/img/foto4.png'
  },
  {
      image: '/assets/img/foto5.png'
  },
  {
      image: '/assets/img/foto6.png'
  }
]

const second_images = [
  {
      image: '/assets/img/foto13.png'
  },
  {
      image: '/assets/img/foto14.png'
  },
  {
      image: '/assets/img/foto15.png'
  },
  {
      image: '/assets/img/foto16.png'
  },
  {
      image: '/assets/img/foto17.png'
  },
  {
      image: '/assets/img/foto18.png'
  }
]

const thrid_images: Image[] = [
  {
      image: '/assets/img/foto7.png'
  },
  {
      image: '/assets/img/foto8.png'
  },
  {
      image: '/assets/img/foto9.png'
  },
  {
      image: '/assets/img/foto10.png'
  },
  {
      image: '/assets/img/foto11.png'
  },
  {
      image: '/assets/img/foto12.png'
  }
]

export const metadata = {
  title: 'Boda de David y Sara',
  description: 'Invitación a la boda'
}


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between items-center px-10">
        <section className='mt-10'>
          <PlayerWedding></PlayerWedding>
        </section>
        <section className='main'>
          <img className='iniciales-class' src="/assets/principal.png" alt="iniciales" />
        </section>
        <section className='m-15'>
          <video className='h-auto rounded-lg' src="/assets/video.mp4" controls />
        </section>
        <section className='my-10'>
          <img className='rounded-lg' src="/assets/pareja.png" alt="pareja" />
        </section>
        <section className='my-0'>
          <img className='h-auto rounded-xl' src="/assets/texto.png" alt="" />
        </section>
        <div>
          <img src="/assets/5.png" alt="" />
        </div>
      </main>
      <section className='carrousel-main flex-col items-center'>
        <Carrousel images={firts_images} ></Carrousel>
      </section>
      <div className='max-w-screen'>
      <section className="flex flex-col justify-between items-center">
        <img className='h-auto my-10' src="/assets/traje.png" alt="" />
        <div>
          <img src="/assets/5.png" alt="" />
      </div>
      </section>
      </div>
      <section className='carrousel-main flex-col items-center mt-10'>
        <Carrousel images={second_images}></Carrousel>
      </section>
      <div className='max-w-screen'>
      <section className="flex flex-col justify-between items-center">
        <img className='h-auto my-10' src="/assets/invitacion.png" alt="" />
        <div>
          <img src="/assets/5.png" alt="" />
      </div>
      </section>
      </div>
      <section className='carrousel-main flex-col items-center mt-10'>
        <Carrousel images={thrid_images}></Carrousel>
      </section>
      <div className='max-w-screen'>
      <section className="flex flex-col justify-between items-center">
        <img className='h-auto my-10' src="/assets/asistencia.png" alt="" />
      </section>
      </div>
    </>
  );
}
