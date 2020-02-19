/**
 * App To-do List pour Git N' Gin
 * @author Samuel Loranger <samuelloranger@gmail.com>
 * @version 1
 */

import React, { Fragment, useState } from 'react';
import Button from './Button';

const FormulaireAjoutItem = ({ ajouterItemListe }) => {
	const [ titre, setTitre ] = useState('');

	/**
	 * Méthode creerDateFormatee
	 * @description Créer une date sous le format (JJ/MM/AAAA à HH:MM)
	 * @returns String de la date formatée
	 */
	const creerDateFormatee = () => {
		//Création de l'objet date
		const date = new Date();
		let mois = date.getMonth();
		mois < 10 ? (mois = '0' + (mois + 1)) : (mois = mois + 1);

		return (
			date.getDate() + '/' + mois + '/' + date.getFullYear() + ' à ' + date.getHours() + ':' + date.getMinutes()
		);
	};

	/**
	 * Méthode handleChange
	 * @description Change le state du string du titre
	 * @param event event qui appelle la fonction
	 */
	const handleChange = (event) => {
		//Change le state titre
		setTitre(event.currentTarget.value);
	};

	/**
	 * Fonction handleSubmit
	 * @description Lors du submit du formulaire, vérifie s'il y un titre entré,
	 *    créer un objet tache, et appelle la fonction ajouterItemListe de ses props
	 * @param event Event qui appelle la fonction
	 */
	const handleSubmit = (event) => {
		// Empêche le formulaire de se submit donc la page de reloader
		event.preventDefault();

		//Vérifie s'il y a bien un titre entré
		let tacheValide = () => {
			return titre.length === 0 ? false : true;
		};

		//Si la tache est valide, on l'ajoute à la liste
		if (tacheValide()) {
			//Création de l'objet tache
			const tache = {
				id: Date.now(),
				titre: titre,
				date: creerDateFormatee(),
				done: false
			};

			setTitre('');

			//Ajout de la tache à la liste
			ajouterItemListe(tache);
		} else alert('Veuillez entrer un titre...');
	};

	return (
		<Fragment>
			<h2>Ajouter une tâche</h2>
			<form className="todo__formulaire" onSubmit={handleSubmit}>
				<label htmlFor="titreTache">Titre de la tâche</label>
				<input id="titreTache" type="text" value={titre} onChange={handleChange} />
				<Button>Ajouter</Button>
			</form>
		</Fragment>
	);
};

export default FormulaireAjoutItem;
