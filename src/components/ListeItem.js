/**
 * App To-do List pour Git N' Gin
 * @author Samuel Loranger <samuelloranger@gmail.com>
 * @version 1
 */

import React, { useState } from 'react';
import Button from './Button';

const ListeItem = ({ tache, titre, date, terminee, supprimerItemListe }) => {
	// Déclare le state done de l'item
	const [ done, setDone ] = useState(terminee);

	/**
	 * Méthode terminerTache
	 */
	const handleClickTerminer = () => {
		setDone(true);
	};

	const handleClickSupprimer = () => {
		supprimerItemListe(tache);
	};

	if (!done) {
		return (
			<div className="todo__listeItems__element col-12 col-md-6 col-lg-3">
				<div className="conteneur">
					<p className="titre">{titre}</p>
					<p className="date">
						<span className="date__titre">Créé le: </span>
						{date}
					</p>

					<Button action={handleClickTerminer}>Terminée!</Button>
				</div>
			</div>
		);
	} else {
		return (
			<div className="todo__listeItems__element todo__listeItems__element--terminee col-12 col-md-6 col-lg-3">
				<div className="conteneur">
					<p className="titre titre--termine">{titre}</p>
					<p className="date">
						<span className="date__titre">Créé le: </span>
						{date}
					</p>

					<Button action={handleClickSupprimer} extensionClasse="btn--supprimer">
						Supprimer
					</Button>
				</div>
			</div>
		);
	}
};

export default ListeItem;
