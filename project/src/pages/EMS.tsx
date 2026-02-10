import { Heart, Ambulance, Stethoscope, AlertCircle, Pill } from 'lucide-react';

export default function EMS() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center space-x-4">
          <Heart className="w-12 h-12 text-white" />
          <div>
            <h1 className="text-4xl font-bold text-white">Règlement EMS</h1>
            <p className="text-red-100 mt-2">Emergency Medical Services</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <Section icon={Stethoscope} title="1. Devoirs et Responsabilités">
          <Rule>Priorité absolue : sauver des vies</Rule>
          <Rule>Répondre rapidement aux appels d'urgence</Rule>
          <Rule>Prodiguer les premiers soins sur place</Rule>
          <Rule>Transporter les blessés à l'hôpital si nécessaire</Rule>
          <Rule>Respecter le secret médical</Rule>
          <Rule>Rester neutre dans les conflits (ne pas prendre parti)</Rule>
        </Section>

        <Section icon={Ambulance} title="2. Protocoles d'Intervention">
          <Rule>Annoncer sa position et destination via radio</Rule>
          <Rule>Gyrophares et sirène obligatoires en urgence</Rule>
          <Rule>Évaluer la sécurité de la zone avant d'intervenir</Rule>
          <Rule>Attendre la police si la zone est dangereuse</Rule>
          <Rule>Ne jamais laisser un patient sans soins</Rule>
          <Rule>Coordination avec les forces de l'ordre si nécessaire</Rule>
        </Section>

        <Section icon={Pill} title="3. Soins et Traitements">
          <Rule>Examiner le patient avant tout traitement (/me)</Rule>
          <Rule>Expliquer les blessures et les soins prodigués</Rule>
          <Rule>Facturer les soins de manière réaliste</Rule>
          <Rule>Tenir un registre des patients traités</Rule>
          <Rule>Prescrire des médicaments si besoin (RP)</Rule>
          <Rule>Ne pas réanimer sans RP approprié</Rule>
        </Section>

        <Section icon={AlertCircle} title="4. Situations Spéciales">
          <Rule>Fusillades : attendre la fin des tirs</Rule>
          <Rule>Accidents de la route : sécuriser la zone</Rule>
          <Rule>Mort RP : respecter le temps de saignement</Rule>
          <Rule>Prise d'otage : collaborer mais rester neutre</Rule>
          <Rule>Intoxications : roleplay détaillé requis</Rule>
        </Section>

        <Section icon={Heart} title="5. Équipement et Véhicules">
          <Rule>Port de l'uniforme médical obligatoire</Rule>
          <Rule>Ambulances réservées aux urgences</Rule>
          <Rule>Matériel médical à utiliser avec réalisme</Rule>
          <Rule>Pas de conduite dangereuse excessive</Rule>
          <Rule>Véhicules de service = interventions uniquement</Rule>
        </Section>

        <div className="bg-emerald-900/20 border-2 border-emerald-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-3">💚 Code de Déontologie</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Traiter tous les patients équitablement</li>
            <li>• Pas de discrimination (criminel ou citoyen)</li>
            <li>• Confidentialité des dossiers médicaux</li>
            <li>• Professionnalisme en toutes circonstances</li>
            <li>• Respect de la vie humaine avant tout</li>
          </ul>
        </div>

        <div className="bg-red-900/20 border-2 border-red-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-400 mb-3">🚫 Interdictions</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• S'impliquer dans des activités illégales</li>
            <li>• Refuser de soigner un patient (sauf danger immédiat)</li>
            <li>• Utiliser l'ambulance pour un usage personnel</li>
            <li>• Révéler des informations médicales confidentielles</li>
            <li>• Réanimer instantanément sans roleplay</li>
            <li>• Facturer des sommes excessives</li>
          </ul>
        </div>

        <div className="bg-blue-900/20 border-2 border-blue-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-400 mb-3">📋 Tarifs Recommandés</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Consultation simple : 500$ - 1 000$</li>
            <li>• Soins légers : 1 000$ - 2 000$</li>
            <li>• Soins importants : 2 000$ - 4 000$</li>
            <li>• Réanimation : 5 000$ - 8 000$</li>
            <li>• Transport en ambulance : 1 000$</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-red-500/50 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-6 h-6 text-red-400" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start space-x-3 text-slate-300">
      <span className="text-red-400 mt-1">✓</span>
      <span>{children}</span>
    </li>
  );
}
