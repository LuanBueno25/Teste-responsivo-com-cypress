'use client';

export default function Cards() {
  return (
    // Adicionamos o data-cy="container-produtos" para o Cypress encontrar essa div
    <div data-cy="container-produtos" className="flex flex-col md:flex-row p-4 gap-4">
      <div data-cy="produto-1" className="bg-blue-500 p-8 text-white text-center rounded">
        Produto 1
      </div>
      <div data-cy="produto-2" className="bg-green-500 p-8 text-white text-center rounded">
        Produto 2
      </div>
      <div data-cy="produto-3" className="bg-purple-500 p-8 text-white text-center rounded">
        Produto 3
      </div>
    </div>
  );
}