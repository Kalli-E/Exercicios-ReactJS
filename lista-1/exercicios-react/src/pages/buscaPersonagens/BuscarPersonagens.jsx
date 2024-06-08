import React, { useEffect, useState } from 'react';


export function BuscarPersonagens() {
// Lista de itens para buscar
const [items] = useState([
    {id: 1,nome: "Albedo" },
    {id: 2,nome: "Alhaitham" },
    {id: 3,nome: "Arataki Itto" },
    {id: 4,nome: "Arlecchino" },
    {id: 5,nome: "Baizhu" },
    {id: 6,nome: "Dehya" },
    {id: 7,nome: "Diluc" },
    {id: 8,nome: "Eula" },
    {id: 9,nome: "Ganyu" },
    {id: 10,nome: "Hu Tao" },
    {id: 11,nome: "Jean" },
    {id: 12,nome: "Kaedehara Kazuha" },
    {id: 13,nome: "Kamisato Ayaka" },
    {id: 14,nome: "Kamisato Ayato" },
    {id: 15,nome: "Keqing" },
    {id: 16,nome: "Klee" },
    {id: 17,nome: "Mona" },
    {id: 18,nome: "Nahida" },
    {id: 19,nome: "Nilou" },
    {id: 20,nome: "Qiqi" },
    {id: 21,nome: "Raiden Shogun" },
    {id: 22,nome: "Sangonomiya Kokomi" },
    {id: 23,nome: "Shenhe" },
    {id: 24,nome: "Tartaglia" },
    {id: 25,nome: "Tighnari" },
    {id: 26,nome: "Venti" },
    {id: 27,nome: "Wanderer" },
    {id: 28,nome: "Xiao" },
    {id: 29,nome: "Yae Miko" },
    {id: 30,nome: "Yelan" },
    {id: 31,nome: "Yoimiya" },
    {id: 32,nome: "Zhongli" }
]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Filtrar itens com base no termo de busca
  useEffect(()=> {
  const filteredItems = items.filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredItems(filteredItems);
}, [searchTerm, items]);

  return (
    <>
       <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={(event) => 
            setSearchTerm(event.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </>
  );
}


