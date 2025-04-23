# 🎮 HiddenGems API

Essa API foi desenvolvida com o objetivo de dar mais visibilidade aos jogos desenvolvidos por empresas pequenas, pequenas equipes ou até mesmo por uma pessoa.

## 🛠️ Tecnologias utilizadas 

- Node JS
- ES Modules
- Express
- Nodemon

## 🧠 Funcionalidades

- Listar todos os jogos indies
- Buscar os jogos pelo nome
- Buscar os jogos de acordo com o gênero
- Buscar os jogos pela plataforma que ele está disponível
- Permite procurar um jogo pelo nome, gênero ou plataforma, **apenas digitando suas iniciais**

## 🧭 Endpoints

| Método | Rota                        | Descrição                              |
|--------|-----------------------------|----------------------------------------|
| GET    | `/games`                    | Lista todos os jogos indies            |
| GET    | `/games/names`              | Lista os nomes de todos os jogos       |
| GET    | `/games/names/:name`        | Busca os jogos pelo nome               |
| GET    | `/games/genres`             | Lista os gêneros de todos os jogos     |
| GET    | `games/genres/:genre`       | Busca os jogos pelo gênero             |
| GET    | `games/platforms`           | Lista as plataformas de todos os jogos |
| GET    | `games/platforms/:platform` | Busca os jogos pela plataforma         |

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
	"gameByGenres": [
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