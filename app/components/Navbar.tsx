'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-800 p-4 text-white">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">MeuApp</div>
        {/* Menu Desktop - Escondido no Mobile, visível a partir de tamanho médio (md) */}
        <div className="hidden md:flex space-x-4" data-cy="desktop-menu">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Sobre</a>
          <a href="#" className="hover:underline">Contato</a>
        </div>
        {/* Botão Mobile - Visível apenas no Mobile */}
        <button
          className="md:hidden p-2 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          data-cy="mobile-menu-btn"
        >
        ☰
        </button>
      </div>
      {/* Menu Mobile - Dropdown que aparece ao clicar no botão */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2" data-cy="mobile-menu">
          <a href="#" className="bg-blue-700 p-2 rounded">Home</a>
          <a href="#" className="bg-blue-700 p-2 rounded">Sobre</a>
          <a href="#" className="bg-blue-700 p-2 rounded">Contato</a>
        </div>
      )}
    </nav>
  );
}