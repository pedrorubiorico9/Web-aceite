import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-emerald-900 mb-4">Esencia del Sur</h1>
      <p className="text-2xl text-stone-600">Tu tienda de aceite premium está casi lista.</p>
      <div className="mt-8 p-6 bg-white shadow-xl rounded-2xl border border-emerald-100">
        <p className="text-emerald-800 font-medium">Si ves este mensaje, ¡hemos arreglado el error!</p>
      </div>
    </div>
  );
};

export default App;
