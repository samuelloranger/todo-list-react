/**
 * App To-do List pour Git N' Gin
 * @author Samuel Loranger <samuelloranger@gmail.com>
 * @version 1
 */

import React, { Component } from 'react';
import './assets/styles.scss';

//Importation des components
import ListeItem from './components/ListeItem';
import FormulaireAjoutItem from './components/FormulaireAjoutItem';

class App extends Component {
	state = {
		listeItems: []
	};

	componentDidMount() {
		this.lireSauvegarde();
	}

	/**
   * Méthode lireSauvegarde
   * @description Sauvegarde la liste d'items dans le localStorage
   */
	lireSauvegarde = () => {
		//On va chercher le contenu du localStorage
		const listeStockee = JSON.parse(localStorage.getItem('liste'));

		//Si le localStorage est vide, on créer un tableau vide
		if (listeStockee === null) {
			localStorage.setItem('liste', JSON.stringify([]));

			//On règle le state de la liste d'items
			this.setState({
				listeItems: []
			});
		} else {
			//On règle le state de la liste d'items
			this.setState({
				listeItems: listeStockee
			});
		}
	};

	/**
   * Méthode sauvegarderListe
   * @description Sauvegarde la liste d'items dans le localStorage
   */
	sauvegarderListe = () => {
		localStorage.setItem('liste', JSON.stringify(this.state.listeItems));
	};

	/**
   * Méthode ajouterItemListe
   * @description Ajoute l'item à la liste
   * @param tache La tache à ajouter à la liste
   */
	ajouterItemListe = (tache) => {
		//Copie du state de la liste
		const listeItems = [ ...this.state.listeItems ];

		//Push l'item dans le array
		listeItems.push(tache);

		//Set le nouveau state de la liste et sauvegarde dans le localStorage
		this.setState(
			{
				listeItems: listeItems
			},
			() => {
				// On sauvegarde le nouvel array
				this.sauvegarderListe();
			}
		);
	};

	/**
   * Méthode supprimerItemListe
   * @description Retire l'élément du array de tâches
   * 
   */
	supprimerItemListe = (tache) => {
		//Copie du state de la liste
		let listeItems = [ ...this.state.listeItems ];

		//Filtre du array pour retirer la bonne tâche
		listeItems = listeItems.filter((item) => tache !== item);

		//Set le nouveau state de la liste et sauvegarde dans le localStorage
		this.setState(
			{
				listeItems: listeItems
			},
			() => {
				// On sauvegarde le nouvel array
				this.sauvegarderListe();
			}
		);
	};

	render() {
		const { listeItems } = this.state;

		// Retourne vrai si la liste est vide, faux si elle contient quelque chose
		const listeVide = () => {
			return listeItems.length > 0 ? true : false;
		};

		//Si la liste n'est pas vide,
		if (listeVide()) {
			return (
				<div className="todo">
					<header className="header container">
						<h1 className="header__title">Todo List</h1>
					</header>

					<main className="container">
						<FormulaireAjoutItem ajouterItemListe={this.ajouterItemListe} />

						<div className="todo__listeItems row">
							{console.log(listeItems)}
							{listeItems.map((item) => {
								return (
									<ListeItem
										key={item.id}
										tache={item}
										titre={item.titre}
										date={item.date}
										supprimerItemListe={this.supprimerItemListe}
										terminee={item.done}
									/>
								);
							})}
						</div>
					</main>
				</div>
			);
		} else {
			return (
				<div className="Todo">
					<header className="header container">
						<h1 className="header__title">Todo List</h1>
					</header>

					<main className="container">
						<FormulaireAjoutItem ajouterItemListe={this.ajouterItemListe} />
						<p>La liste est vide...</p>
					</main>
				</div>
			);
		}
	}
}

export default App;
