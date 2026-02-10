import { Shield, Users, MessageCircle, Gamepad2, Ban } from 'lucide-react';

export default function General() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center space-x-4">
          <Shield className="w-12 h-12 text-white" />
          <div>
            <h1 className="text-4xl font-bold text-white">Règlement Général</h1>
            <p className="text-cyan-100 mt-2">Les bases du roleplay sur Trillerium</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <Section icon={Users} title="1. Respect et Comportement">
          <Rule>Le respect entre joueurs est obligatoire, en jeu comme sur Discord</Rule>
          <Rule>Aucune discrimination (racisme, homophobie, sexisme, etc.) ne sera tolérée</Rule>
          <Rule>Le harcèlement sous toutes ses formes est strictement interdit</Rule>
          <Rule>Gardez un langage approprié et évitez les insultes hors roleplay</Rule>
        </Section>

        <Section icon={Gamepad2} title="2. Roleplay">
          <Rule>Le roleplay doit être réaliste et cohérent (pas de super-héros)</Rule>
          <Rule>Respectez la vie de votre personnage (pas de /respawn abusif)</Rule>
          <Rule>Le FailRP est interdit (actions non réalistes)</Rule>
          <Rule>Le PowerGaming est interdit (forcer des actions sur un joueur)</Rule>
          <Rule>Le MetaGaming est interdit (utiliser des infos hors RP)</Rule>
          <Rule>Respectez le /me et le /do pour les actions et descriptions</Rule>
        </Section>

        <Section icon={MessageCircle} title="3. Communication">
          <Rule>Utilisez la radio et le téléphone de manière réaliste</Rule>
          <Rule>Pas de méta-communication (Discord vocal pendant le RP)</Rule>
          <Rule>La communication entre vivants et morts est interdite</Rule>
          <Rule>Respectez les distances de communication vocale</Rule>
        </Section>

        <Section icon={Ban} title="4. Interdictions">
          <Rule>RDM (Random Deathmatch) - Tuer sans raison RP valable</Rule>
          <Rule>VDM (Vehicle Deathmatch) - Écraser volontairement sans raison</Rule>
          <Rule>CombatLog - Se déconnecter pendant une action RP</Rule>
          <Rule>Utilisation de bugs ou glitchs</Rule>
          <Rule>Multi-compte sans autorisation</Rule>
          <Rule>Revenge Kill - Retourner se venger après une mort</Rule>
        </Section>

        <Section icon={Shield} title="5. Forces de l'Ordre">
          <Rule>Respectez les ordres des forces de l'ordre</Rule>
          <Rule>Ne pas tuer un policier sans raison RP sérieuse</Rule>
          <Rule>Acceptez les contrôles et fouilles légitimes</Rule>
          <Rule>Les prises d'otages doivent être justifiées</Rule>
        </Section>

        <div className="bg-red-900/20 border-2 border-red-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-400 mb-3">⚠️ Sanctions</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• 1ère infraction : Avertissement</li>
            <li>• 2ème infraction : Kick + Avertissement final</li>
            <li>• 3ème infraction : Ban temporaire (durée variable)</li>
            <li>• Infractions graves : Ban permanent</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-6 h-6 text-cyan-400" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start space-x-3 text-slate-300">
      <span className="text-cyan-400 mt-1">✓</span>
      <span>{children}</span>
    </li>
  );
}
