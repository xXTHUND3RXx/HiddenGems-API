# 🎮 HiddenGems API

Essa API foi desenvolvida com o objetivo de dar mais visibilidade aos jogos desenvolvidos por empresas pequenas, pequenas equipes ou até mesmo por uma pessoa.

## 🔴 Problematização

A indústria de jogos anda crescendo cada vez mais atualmente, todo ano milhares e milhares de cópias são vendidas, e consequentemente isso acaba promovendo o crescimento de empresas já veteranas no mercado. E porque isso acaba só beneficiando empresas com anos de mercado? Isso é muito simples, os jogos que vendem milhares e milhares de cópias, geralmente são de empresas grandes, porque elas tem o capital necessário para investir em jogos com altos orçamentos e no marketing para proporcionar ao público a divulgação do seu jogo. Contudo, jogos desenvolvido por empresas pequenas (também conhecido como jogos indies) ou feitos por pouco desenvolvedores, acabam não tendo esse privilégio. 

## ✅ Solução

Foi pensando nisso que venho apresenta a HiddenGems API. Ela é um catálogo de jogos indies com o propósito de mostrar jogos desconhecidos de diversos gêneros ao público.

## 🔧 Elaboração

O projeto foi desenvolvido com as seguintes tecnologias: Node JS, ES Modules, Express e Nodemon. O servidor foi desenvolvido utilizando Node JS. O Express para criação do servidor e das rotas. ES Modules para modularização do código, e o Nodemon para executar o servidor.

## 🛠️ Tecnologias utilizadas 

- Node JS
- Express
- Nodemon

## 🧠 Funcionalidades

- Listar todos os jogos indies
- Buscar os jogos pelo nome
- Buscar os jogos de acordo com o gênero
- Buscar os jogos pela plataforma que ele está disponível
- Permite procurar um jogo pelo nome, gênero ou plataforma, **apenas digitando suas iniciais**

## 🚀 Como rodar o projeto localmente

### 🧰 Pré-requisitos
- Node JS
- (Opcional) Postman ou outra ferramenta de testes de API

### 💻 Instalação

#### 1. Clone o repositório

```bash
git clone https://github.com/xXTHUND3RXx/HiddenGems-API.git
```

#### 2. Navegue até a pasta do projeto

```bash
cd HiddenGems-API
```

#### 3. Instale as dependências
```bash
npm install
```

#### 4. Inicie o servidor
```bash
npm run dev
```


## 🧭 Endpoints

| Método | Rota                        | Descrição                                 |
|--------|-----------------------------|-------------------------------------------|
| GET    | `/games`                    | Lista todos os jogos indies               |
| GET    | `/games/names`              | Lista os nomes de todos os jogos          |
| GET    | `/games/names/:name`        | Busca os jogos pelo nome ou suas iniciais |
| GET    | `/games/genres`             | Lista os gêneros de todos os jogos        |
| GET    | `games/genres/:genre`       | Busca os jogos pelo gênero                |
| GET    | `games/platforms`           | Lista as plataformas de todos os jogos    |
| GET    | `games/platforms/:platform` | Busca os jogos pela plataforma            |

## 🔍 Exemplos de requições

### 🔗 Buscar os jogos pelo nome

`/games/names/sea%20of%20stars`

### 📄 Resposta
```json
{
	"gameName": [
		{
			"id": 23,
			"name": "Sea of Stars",
			"genres": [
				"Adventure",
				"Role-Playing",
				"Turn-Based"
			],
			"image": "https://howlongtobeat.com/games/102816_Sea_of_Stars.jpg?width=250",
			"developer": "Sabotage Studio",
			"publisher": "Sabotage Studio",
			"platforms": [
				"Nintendo Switch",
				"PC",
				"PlayStation 4",
				"PlayStation 5",
				"Xbox One",
				"Xbox Series X/S"
			],
			"release_date": "August 29th, 2023"
		}
	]
}
```

### 🔗 Buscar os jogos pelo gênero

`/games/genres/horror`

### 📄 Resposta
```json
{
	"Genres": [
		{
			"id": 10,
			"name": "Stay Out of the House",
			"genres": [
				"First-Person",
				"Horror"
			],
			"image": "https://howlongtobeat.com/games/89791_Stay_Out_of_the_House.jpg?width=250",
			"developer": "Puppet Combo",
			"publisher": "Puppet Combo",
			"platforms": [
				"PC",
				"Xbox Series X/S"
			],
			"release_date": "October 14th, 2022"
		},
		{
			"id": 13,
			"name": "The Mortuary Assistant",
			"genres": [
				"Horror",
				"Simulation"
			],
			"image": "https://howlongtobeat.com/games/90078_The_Mortuary_Assistant.jpg?width=250",
			"developer": "DarkStone Digital",
			"publisher": "DreadXP",
			"platforms": [
				"PC"
			],
			"release_date": "August 2nd, 2022"
		}
	]
}
```

### 🔗 Buscar os jogos pela plataforma

`/games/platforms/mobile`

### 📄 Resposta

```json
{
	"platforms": [
		{
			"id": 1,
			"name": "Death's Door",
			"genres": [
				"Top-Down",
				"Action",
				"Role-Playing"
			],
			"image": "https://howlongtobeat.com/games/90590_Deaths_Door.jpg?width=250",
			"developer": "Acid Nerve",
			"publisher": "Devolver Digital",
			"platforms": [
				"Mobile",
				"Nintendo Switch",
				"PC",
				"PlayStation 4",
				"Playstation 5",
				"Xbox One",
				"Xbox Series X/S"
			],
			"release_date": "July 20th, 2021"
		},
		{
			"id": 4,
			"name": "Dead Cells",
			"genres": [
				"Action",
				"Roguelike",
				"Metroidvania"
			],
			"image": "https://howlongtobeat.com/games/45727_Dead_Cells.jpg?width=250",
			"developer": "Motion Twin",
			"publisher": "Motion Twin",
			"platforms": [
				"Mobile",
				"Nintendo Switch",
				"PC",
				"PlayStation 4",
				"Xbox One"
			],
			"release_date": "August 7th, 2018"
		}
	]
}
```