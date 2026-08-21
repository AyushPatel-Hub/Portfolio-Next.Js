import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden bg-black z-[-10] pointer-events-none md:pointer-events-auto">
        <Spline scene="https://prod.spline.design/C83wWoQM0hBjSUTi/scene.splinecode" />
    </main>
    
  );
}
