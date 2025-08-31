<script>
(function() {
    function calculerOpacite() {
        const maintenant = new Date();
        

        if (maintenant < dateDebut) {
            return 1;
        }
        

        if (maintenant >= dateFin) {
            return 0;
        }
        

        const dureeTotal = dateFin.getTime() - dateDebut.getTime();
        const tempsEcoule = maintenant.getTime() - dateDebut.getTime();
        const progression = tempsEcoule / dureeTotal;
        

        return Math.max(0, 1 - progression);
    }
    
    function appliquerOpacite() {
        const opacite = calculerOpacite();
        document.body.style.opacity = opacite;

        if (opacite === 0) {
            document.body.style.pointerEvents = 'none';
        }
    }
    
    // Exécuter quand le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', appliquerOpacite);
    } else {
        appliquerOpacite();
    }
    
    // Mettre à jour l'opacité chaque heure
    setInterval(appliquerOpacite, 3600000);
    
    const dateDebut = new Date('2025-08-31'); // Date de début
    const dateFin = new Date('2025-09-10');   
})();
</script>
