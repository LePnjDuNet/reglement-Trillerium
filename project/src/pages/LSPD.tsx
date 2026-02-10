import { Siren, Badge, Lock, Radio, FileText } from 'lucide-react';

export default function LSPD() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center space-x-4">
          <Siren className="w-12 h-12 text-white" />
          <div>
            <h1 className="text-4xl font-bold text-white">Règlement LSPD</h1>
            <p className="text-blue-100 mt-2">Los Santos Police Department</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <Section icon={Badge} title="1. Recrutement et Hiérarchie">
          <Rule>Respecter la hiérarchie en toutes circonstances</Rule>
          <Rule>Formation obligatoire avant de patrouiller seul</Rule>
          <Rule>Port de l'uniforme réglementaire obligatoire en service</Rule>
          <Rule>Les ordres des supérieurs sont à exécuter sans discussion</Rule>
          <Rule>Insubordination = sanctions disciplinaires</Rule>
        </Section>

        <Section icon={Radio} title="2. Protocoles d'Intervention">
          <Rule>Toujours annoncer sa position et ses interventions</Rule>
          <Rule>Demander des renforts si la situation l'exige</Rule>
          <Rule>Utiliser la radio de manière professionnelle</Rule>
          <Rule>Codes 10 à utiliser pour les communications</Rule>
          <Rule>Ne jamais intervenir seul sur un braquage en cours</Rule>
        </Section>

        <Section icon={Lock} title="3. Arrestations et Procédures">
          <Rule>Lire les droits Miranda lors de chaque arrestation</Rule>
          <Rule>Menotter avant de fouiller un suspect</Rule>
          <Rule>Respecter les droits des citoyens</Rule>
          <Rule>Remplir un rapport après chaque arrestation</Rule>
          <Rule>Les preuves doivent être légalement obtenues</Rule>
          <Rule>Respecter les temps de détention légaux</Rule>
        </Section>

        <Section icon={FileText} title="4. Barème des Peines">
          <Rule>Vol simple : 2 000$ + 10 minutes</Rule>
          <Rule>Vol de véhicule : 3 500$ + 15 minutes</Rule>
          <Rule>Agression : 4 000$ + 20 minutes</Rule>
          <Rule>Braquage de supérette : 8 000$ + 30 minutes</Rule>
          <Rule>Braquage de banque : 15 000$ + 45 minutes</Rule>
          <Rule>Meurtre : 20 000$ + 60 minutes</Rule>
          <Rule>Les peines sont cumulables selon les infractions</Rule>
        </Section>

        <Section icon={Siren} title="5. Conduite et Véhicules">
          <Rule>Respect du code de la route (sauf urgences)</Rule>
          <Rule>Gyrophares obligatoires en intervention</Rule>
          <Rule>Utiliser la sirène de manière appropriée</Rule>
          <Rule>Pas de conduite dangereuse sans raison valable</Rule>
          <Rule>Véhicules de service réservés aux interventions</Rule>
        </Section>

        <div className="bg-amber-900/20 border-2 border-amber-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-amber-400 mb-3">⚠️ Corruption</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• La corruption nécessite une autorisation préalable</li>
            <li>• Doit rester réaliste et cohérente</li>
            <li>• Risque de renvoi si découverte</li>
            <li>• Pas de corruption excessive (garder du RP)</li>
          </ul>
        </div>

        <div className="bg-red-900/20 border-2 border-red-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-400 mb-3">🚫 Interdictions</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Abuser de son pouvoir (abus de force)</li>
            <li>• Tuer sans raison valable (même en service)</li>
            <li>• Utiliser l'équipement police hors service</li>
            <li>• Divulguer des informations confidentielles</li>
            <li>• Travailler avec des organisations criminelles (sauf corruption autorisée)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-6 h-6 text-blue-400" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start space-x-3 text-slate-300">
      <span className="text-blue-400 mt-1">✓</span>
      <span>{children}</span>
    </li>
  );
}
