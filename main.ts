// Définition de l'interface Véhicule
interface Vehicule {
    make: string; // Marque du véhicule
    model: string; // Modèle du véhicule
    year: number; // Année de fabrication
    start(): void; // Méthode qui affiche "Engine started"
  }
  
  // Implémentation de la classe Voiture
  class Voiture implements Vehicule {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Création d'une instance de la classe Voiture
  const maVoiture = new Voiture("Toyota", "Corolla", 2022);
  
  // Appel de la méthode start
  maVoiture.start();
  