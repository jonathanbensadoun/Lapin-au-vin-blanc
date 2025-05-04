import React from "react";
import { Clock, Users, Flame } from "lucide-react";

const RecipeCard: React.FC = () => {
  return (
    <div className="max-w-3xl w-full bg-white shadow-md rounded-lg overflow-hidden print:shadow-none  ">
      {/* Recipe Header */}
      <div className="p-4 bg-primary text-white ">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center  gap-2">
          <h1 className="text-xl md:text-2xl font-bold">
            Lapin au vin blanc et aux champignons de Paris
          </h1>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-md transition print:hidden"
          >
            Imprimer
          </button>
        </div>
      </div>

      {/* Recipe Info */}
      <div className="border-b border-primary/20 bg-primary/5 print:bg-primary/5">
        <div className="grid grid-cols-3 gap-2 p-2 text-sm">
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4 text-primary" />
            <div>
              <p className="font-medium">Difficulté</p>
              <p className="text-sm">Facile</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            <div>
              <p className="font-medium">Temps total</p>
              <p className="text-sm">1h05</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-primary" />
            <div>
              <p className="font-medium">Portions</p>
              <p className="text-sm">6 personnes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 grid md:grid-cols-5 gap-4 print:gap-3">
        {/* Ingredients */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-2 text-secondary border-b pb-1">
            <span>📝 Ingrédients</span>
          </h2>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium">•</span>
              <span>1 lapin entier (environ 1,5 kg)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium">•</span>
              <span>300 g de champignons de Paris</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium">•</span>
              <span>250 g d'oignons grelots</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium">•</span>
              <span>150 g de lardons</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium">•</span>
              <span>30 cl de vin blanc sec</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium">•</span>
              <span>1 bouquet garni</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium">•</span>
              <span>1 c. à soupe de farine</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium">•</span>
              <span>3 c. à soupe d'huile</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium">•</span>
              <span>Sel, poivre du moulin</span>
            </li>
          </ul>

          <div className="mt-4">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-2 text-secondary border-b pb-1">
              <span>🍽️ Accompagnement</span>
            </h2>
            <p className="text-sm">
              Servez chaud avec des pommes de terre vapeur, rissolées ou en
              purée.
            </p>
          </div>
        </div>

        {/* Preparation */}
        <div className="md:col-span-3">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-2 text-secondary border-b pb-1">
            <span>👩‍🍳 Préparation</span>
          </h2>

          <div className="space-y-2 print:space-y-2 text-sm">
            <div>
              <h3 className="font-medium text-secondary mb-1">
                1. Préparer les légumes :
              </h3>
              <ul className="space-y-0.5 ml-4">
                <li className="list-disc text-gray-700">
                  Épluchez les oignons grelots.
                </li>
                <li className="list-disc text-gray-700">
                  Nettoyez les champignons : retirez les pieds terreux, rincez
                  les têtes à l'eau vinaigrée, séchez-les et émincez-les.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-secondary mb-1">
                2. Dorer le lapin :
              </h3>
              <ul className="space-y-0.5 ml-4">
                <li className="list-disc text-gray-700">
                  Découpez le lapin en morceaux si ce n'est pas déjà fait.
                </li>
                <li className="list-disc text-gray-700">
                  Saupoudrez les morceaux de lapin avec la farine.
                </li>
                <li className="list-disc text-gray-700">
                  Faites chauffer l'huile dans une cocotte.
                </li>
                <li className="list-disc text-gray-700">
                  Faites dorer les morceaux de lapin 2 à 3 min à feu vif.
                </li>
                <li className="list-disc text-gray-700">Salez, poivrez.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-secondary mb-1">
                3. Déglacer et mijoter :
              </h3>
              <ul className="space-y-0.5 ml-4">
                <li className="list-disc text-gray-700">
                  Versez le vin blanc dans la cocotte pour déglacer.
                </li>
                <li className="list-disc text-gray-700">
                  Ajoutez le bouquet garni, les oignons grelots et les lardons.
                </li>
                <li className="list-disc text-gray-700">
                  Couvrez et laissez mijoter 20 min à feu doux.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-secondary mb-1">
                4. Ajouter les champignons :
              </h3>
              <ul className="space-y-0.5 ml-4">
                <li className="list-disc text-gray-700">
                  Incorporez les champignons émincés.
                </li>
                <li className="list-disc text-gray-700">
                  Poursuivez la cuisson à couvert pendant encore 20 min.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between border-t border-primary/20 print:mt-4">
        <div className="text-center text-secondary text-sm italic">
          Retrouve la recette complète en flashant ce QR code, Bon appétit !
        </div>
        <div className="print:block hidden">
          <img src="/qr-code.png" alt="QR Code" className="h-16 w-auto" />

          {/* <QRCodeSVG 
            value="Scannez-moi pour retrouver la recette en ligne !" 
            size={60}
            fgColor="#005910"
            className="print:block hidden"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
