import { Skull, Store, Banknote, Train, Users, AlertTriangle } from 'lucide-react';

export default function Illegal() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center space-x-4">
          <Skull className="w-12 h-12 text-white" />
          <div>
            <h1 className="text-4xl font-bold text-white">Activités Illégales</h1>
            <p className="text-red-100 mt-2">Règlement des actions criminelles</p>
          </div>
        </div>
      </div>

      <div className="bg-red-900/30 border-2 border-red-500 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-red-400 mb-2">⚠️ Condition Obligatoire pour les Braquages</h3>
            <p className="text-slate-300">
              <strong>TOUS les braquages nécessitent la présence de policiers en service.</strong> Avant de lancer un braquage,
              vous devez impérativement vérifier qu'il y a des membres du LSPD connectés et en service.
              Tout braquage effectué sans policiers en jeu sera considéré comme du FailRP et sera sanctionné.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <Section icon={Skull} title="1. Règles Générales du Crime">
          <Rule>Toujours avoir une raison RP valable pour vos actions</Rule>
          <Rule>Ne pas abuser des braquages (maximum 1 par heure)</Rule>
          <Rule>Respecter le roleplay même en situation illégale</Rule>
          <Rule>Ne pas cibler les mêmes personnes répétitivement</Rule>
          <Rule>Accepter les conséquences de vos actes (arrestation, mort)</Rule>
          <Rule>Les zones de spawn sont interdites pour toute activité illégale</Rule>
        </Section>

        <Section icon={Store} title="2. Braquage de Supérette">
          <div className="bg-slate-900/50 rounded-lg p-4 mb-3 border border-slate-600">
            <h4 className="font-bold text-amber-400 mb-2">Conditions requises :</h4>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Minimum 2 policiers en service</li>
              <li>• Maximum 4 braqueurs</li>
              <li>• Temps de cooldown : 30 minutes entre chaque braquage</li>
            </ul>
          </div>
          <Rule>Annoncer clairement le braquage au personnel</Rule>
          <Rule>Ne pas tuer sans raison (éviter la violence inutile)</Rule>
          <Rule>Respecter le temps nécessaire pour le braquage</Rule>
          <Rule>Possibilité de prendre un otage (RP requis)</Rule>
          <Rule>Gains : 3 000$ - 7 000$</Rule>
        </Section>

        <Section icon={Banknote} title="3. Braquage de Fleeca">
          <div className="bg-slate-900/50 rounded-lg p-4 mb-3 border border-slate-600">
            <h4 className="font-bold text-amber-400 mb-2">Conditions requises :</h4>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Minimum 4 policiers en service</li>
              <li>• Maximum 6 braqueurs</li>
              <li>• Temps de cooldown : 1 heure entre chaque braquage</li>
            </ul>
          </div>
          <Rule>Planification obligatoire (pas d'improvisation totale)</Rule>
          <Rule>Otages recommandés pour négociation</Rule>
          <Rule>Attendre l'arrivée de la police avant de fuir</Rule>
          <Rule>Respecter les négociations avec les forces de l'ordre</Rule>
          <Rule>Ne pas exécuter les otages sans raison RP majeure</Rule>
          <Rule>Gains : 150 000$ - 200 000$</Rule>
        </Section>

        <Section icon={Train} title="4. Braquage de Train">
          <div className="bg-slate-900/50 rounded-lg p-4 mb-3 border border-slate-600">
            <h4 className="font-bold text-amber-400 mb-2">Conditions requises :</h4>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Minimum 3 policiers en service</li>
              <li>• Maximum 5 braqueurs</li>
              <li>• Temps de cooldown : 45 minutes entre chaque braquage</li>
            </ul>
         </div>
          <Rule>Stopper le train de manière réaliste</Rule>
          <Rule>Gérer les passagers (otages potentiels)</Rule>
          <Rule>Temps limité avant l'arrivée de la police</Rule>
          <Rule>Prévoir une échappatoire crédible</Rule>
          <Rule>Éviter de tuer les passagers civils</Rule>
          <Rule>Gains : 15 000$ - 35 000$ selon le RP</Rule>
        </Section>

        <Section icon={Users} title="5. Organisations Criminelles">
          <Rule>Territoire défini et respecté entre gangs</Rule>
          <Rule>Guerres de gangs nécessitent validation staff</Rule>
          <Rule>Pas d'alliance permanente (rivalité RP)</Rule>
          <Rule>Hiérarchie et structure internes recommandées</Rule>
          <Rule>Respect des autres organisations (pas d'extermination)</Rule>
          <Rule>Le Fear Gang / Orga et Obligatoire</Rule>
        </Section>

        <div className="bg-purple-900/20 border-2 border-purple-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-3">💎 Trafics et Activités</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Trafic de drogue : doit être roleplayé correctement</li>
            <li>• Vol de véhicules : ne pas spam les vols</li>
            <li>• Kidnapping : consentement RP requis (pas de ruine d'expérience)</li>
            <li>• Recel : achats/ventes d'objets volés</li>
            <li>• Toutes activités doivent générer du roleplay de qualité</li>
          </ul>
        </div>

        <div className="bg-red-900/30 border-2 border-red-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-400 mb-3">🚫 Interdictions Strictes</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Braquage sans policiers en service = Warn + Tig</li>
            <li>• Spawn kill ou camp de spawn = Ban temporaire + Warn</li>
            <li>• Voler/tuer un joueur qui vient de se connecter = Warn + Tig</li>
            <li>• Abuser des braquages (spam) = Ban temporaire + Warn</li>
            <li>• Tuer sans raison RP valable (RDM) = Ban temporaire + Warn</li>
            <li>• Utiliser des informations OOC (MetaGaming) = Ban temporaire + Warn</li>
            <li>• Torturer de manière excessive (respect des limites) = Warn</li>
          </ul>
        </div>

        <div className="bg-amber-900/20 border-2 border-amber-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-amber-400 mb-3">⚡ Rappels Importants</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Le RP passe avant les gains financiers</li>
            <li>• Accepter de perdre fait partie du jeu</li>
            <li>• Collaborer avec les autres joueurs pour un RP de qualité</li>
            <li>• Les sanctions pour non-respect seront sévères</li>
            <li>• En cas de doute, contactez un membre du staff</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-6 h-6 text-orange-400" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start space-x-3 text-slate-300">
      <span className="text-orange-400 mt-1">✓</span>
      <span>{children}</span>
    </li>
  );
}
