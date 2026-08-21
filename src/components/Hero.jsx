// import Spline from '@splinetool/react-spline';

// export default function App() {
//   return (
//     <main className="  fixed inset-0 w-screen h-screen overflow-hidden bg-black z-[-10] pointer-events-none md:pointer-events-auto">
//         <Spline scene="https://prod.spline.design/C83wWoQM0hBjSUTi/scene.splinecode" />
//     </main>
    
//   );
// }
import Image from 'next/image';
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <>
      {/* Mobile Only: Static Background Image */}
      <div className="block md:hidden fixed inset-0 w-full h-full z-[-10] pointer-events-none overflow-hidden bg-black">
        <Image
          src="/bgmains.png" // Replace with your actual file name in the public folder
          alt="Hero background"
          fill
          priority
          className="object-cover object-center opacity-80 z-[-10]"
        />
        {/* Optional dark overlay to ensure text stays readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Desktop Only: 3D Spline Scene */}
      <main className="hidden md:block fixed inset-0 w-full h-full overflow-hidden bg-black z-[-10] pointer-events-auto">
        <Spline scene="https://prod.spline.design/C83wWoQM0hBjSUTi/scene.splinecode" />
      </main>
    </>
  );
}