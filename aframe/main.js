window.onload = function () {

    //Gerecht https://www.gousto.co.uk/cookbook/beef-recipes/balsajo-black-garlic-burger
    //Autheur: Erik van Oosbree - S1101701

    var stap = 0

    //uitleg vars
    var uitlegstap1 = document.getElementById("uitleg-stap1");
    var uitlegstap2 = document.getElementById("uitleg-stap2");
    var uitlegstap3 = document.getElementById("uitleg-stap3");
    var uitlegstap4 = document.getElementById("uitleg-stap4");
    var uitlegstap5 = document.getElementById("uitleg-stap5");
    var uitlegstap6 = document.getElementById("uitleg-stap6");
    var uitlegstap7 = document.getElementById("uitleg-stap7");
    var uitlegstap8 = document.getElementById("uitleg-stap8");
    var uitlegstap9 = document.getElementById("uitleg-stap9");
    var uitlegstap10 = document.getElementById("uitleg-stap10");
    var uitlegstap11 = document.getElementById("uitleg-stap11");
    var uitlegstap12 = document.getElementById("uitleg-stap12");
    var uitlegstap13 = document.getElementById("uitleg-stap13");

    var KnifeAudio = new Audio("audio/KnifeCuttting.mp3")
    var HamburgerSoundGril = new Audio("audio/HamburgerGril.mp3")
    var start = document.getElementById("start");
    var onion = document.getElementById("onion");
    var tomaat = document.getElementById("tomaat");
    var tomaatgesneden = document.getElementById("tomaat-gesneden");
    var sla = document.getElementById("sla");
    var slagesneden = document.getElementById("sla-gesneden");
    var knoflook = document.getElementById("zwarte-knoflook");
    var knoflookgesneden = document.getElementById("zwarte-knoflook-gesneden");

    var knifepointer = document.getElementById("knife-pointer")

    //Get viewpoint
    var beeld = document.getElementById("beeld");
    var viewpoint = document.getElementById("viewpoint");
    var camera = document.getElementById("camera");

    //Function to turn on the fire
    var stovebutton = document.getElementById("js--stove-button");
    var stovefire = document.getElementById('stove-fire');
    var firestartaudio = new Audio('audio/Fire-sound-start.mp3');

    //Function to move
    var walkboxgrill = document.getElementById("js--walkbox-grill")
    var walkboxstove = document.getElementById("js--walkbox-stove")

    //Hamburger functions
    var burger = document.getElementById("burger")
    var burgerpointer = document.getElementById("burger-pointer")
    var gesnedenknoflookpointer = document.getElementById("zwarte-knoflook-gesneden-pointer")
    //Hamburger gebakken
    var bottombun = document.getElementById("bottom-bun")
    var topbun = document.getElementById("top-bun")

    walkboxgrill.addEventListener("mouseenter", function () {
        viewpoint.setAttribute("position", "-0.6176649099746476 2 0")
    })

    walkboxstove.addEventListener("mouseenter", function () {
        viewpoint.setAttribute("position", "0.4896625812883877 2 0")
    });

    //Pan functions
    var fryingpan = document.getElementById("fryingpan")
    var fryingpanpointer = document.getElementById("fryingpan-pointer")

    var onionSlicedPointer = document.getElementById("onionsliced-pointer")

    stap0();

    function stap0() {
        start.addEventListener("mouseenter", startMouseEventHandler);
    }

    function startMouseEventHandler() {
        console.log("Programma start");

        start.setAttribute('visible', 'false');
        uitlegstap1.setAttribute('visible', 'true');

        start.removeEventListener("mouseenter", startMouseEventHandler);

        stap1();
    }

    function stap1() {
        console.log('stap1');
        //Stap 1: Pak het mes
        var knife = document.getElementById("knife")
        knife.addEventListener("mouseenter", knifeMouseEventHandler)
    }

    function knifeMouseEventHandler() {
        console.log("Mes opgepakt");
        camera.appendChild(knife);
        knife.setAttribute("position", "0.4640895298767826 -0.17 -0.428");
        knife.setAttribute("rotation", "0 80 0");
        uitlegstap1.setAttribute('visible', 'false');

        knife.removeEventListener("mouseenter", knifeMouseEventHandler);
        stap2();
    }

    function stap2() {
        console.log("stap 2")
        //Stap 2: Snij de ui, tomaat en gem sla
        uitlegstap2.setAttribute('visible', 'true');

        onion.addEventListener("mouseenter", onionMouseEventHandler)
    }

    function onionMouseEventHandler() {
        console.log("Ui gesneden")
        onion.setAttribute("visible", "false");
        onionsliced.setAttribute("visible", "true");
        KnifeAudio.play();

        onion.removeEventListener("mouseenter", onionMouseEventHandler);
        slaAddEventListener();

    }

    function slaAddEventListener() {
        sla.addEventListener("mouseenter", slaMouseEventHandler)
    }

    function slaMouseEventHandler() {
        console.log("sla gesneden")
        KnifeAudio.play()
        sla.setAttribute("visible", "false");
        slagesneden.setAttribute("visible", "true");
        sla.removeEventListener("mouseenter", slaMouseEventHandler);
        tomaatAddEventListener()
    }

    function tomaatAddEventListener() {
        tomaat.addEventListener("mouseenter", tomaatMouseEventHandler)
    }

    function tomaatMouseEventHandler() {
        KnifeAudio.play()
        console.log("tomaat gesneden")
        tomaat.setAttribute("visible", "false");
        tomaat.removeEventListener("mouseenter", tomaatMouseEventHandler)

        tomaatgesneden.setAttribute("visible", "true");

        stap3();
    }

    function stap3() {
        KnifeAudio.play()
        uitlegstap2.setAttribute('visible', 'false');
        uitlegstap3.setAttribute('visible', 'true');

        knoflook.addEventListener("mouseenter", knoflookMouseEventHandler);
    }

    function knoflookMouseEventHandler() {
        KnifeAudio.play()
        console.log("knoflook gesneden");
        knoflook.setAttribute("visible", "false");
        knoflookgesneden.setAttribute("visible", "true");
        stap4();
        knoflook.removeEventListener("mouseenter", knoflookMouseEventHandler);
    }

    function stap4() {
        //stap 4
        console.log("stap 4")

        uitlegstap3.setAttribute('visible', 'false');
        uitlegstap4.setAttribute('visible', 'true');

        knifepointer.addEventListener("mouseenter", knifepointerMouseEventHandler);
    }

    function knifepointerMouseEventHandler() {
        knife.setAttribute("visible", "false");
        knifepointer.setAttribute("visible", "true");

        stap5();
        knifepointer.removeEventListener("mouseenter", knifepointerMouseEventHandler);
    }

    function stap5() {
        //Stap 5
        console.log("stap 5");
        uitlegstap4.setAttribute('visible', 'false');
        uitlegstap5.setAttribute('visible', 'true');

        knoflookgesneden.addEventListener("mouseenter", gesnedenKnoflookOppakHandler);

    }

    function gesnedenKnoflookOppakHandler() {
        camera.appendChild(knoflookgesneden);
        knoflookgesneden.setAttribute("position", "0.4640895298767826 -0.17 -0.428");
        knoflookgesneden.setAttribute("rotation", "0 180 0");
        knoflookgesneden.removeEventListener("mouseenter", gesnedenKnoflookOppakHandler);
        burgerHoverMetKnoflookEventListener();
    }

    function burgerHoverMetKnoflookEventListener() {
        burger.addEventListener("mouseenter", burgerMouseEventHandler);
    }


    function burgerMouseEventHandler() {
        console.log("burger");
        uitlegstap5.setAttribute('visible', 'false');
        uitlegstap6.setAttribute('visible', 'true');
        camera.appendChild(burger);
        burger.setAttribute("position", "0.4640895298767826 -0.17 -0.428");
        burger.setAttribute("rotation", "0 180 0");

        burger.removeEventListener("mouseenter", burgerMouseEventHandler);
        addBurgerOnPlateListener()
    }

    //Stap 6
    function addBurgerOnPlateListener() {
        burgerpointer.addEventListener("mouseenter", burgerOnGrillHandler);
    }

    function burgerOnGrillHandler() {
        burger.setAttribute("visible", "false");
        burgerpointer.setAttribute("visible", "true");
        uitlegstap6.setAttribute('visible', 'false');
        uitlegstap7.setAttribute('visible', 'true');
        gesnedenknoflookpointer.setAttribute("visible", "true");
        knoflookgesneden.setAttribute("visible", "false");

        burgerpointer.removeEventListener("mouseenter", burgerOnGrillHandler);

        stap7();
    }

    //Pak de pan en zet deze op het fornuis
    function stap7() {
        fryingpan.addEventListener("mouseenter", pickUpFryingPan)
    }

    function pickUpFryingPan() {
        console.log("Pan");
        camera.appendChild(fryingpan)
        fryingpan.setAttribute("position", "0.4640895298767826 -0.17 -0.428");
        fryingpan.setAttribute("rotation", "0 180 0");

        addFryingPanOnStoveListener();
        fryingpan.removeEventListener("mouseenter", pickUpFryingPan)
    }

    function addFryingPanOnStoveListener() {
        fryingpanpointer.addEventListener("mouseenter", placeFryingPanOnStove)
    }

    function placeFryingPanOnStove() {
        fryingpan.setAttribute("visible", "false");
        fryingpanpointer.setAttribute("visible", "true");

        uitlegstap7.setAttribute('visible', 'false');
        uitlegstap8.setAttribute('visible', 'true');

        stap8();

        fryingpanpointer.removeEventListener("mouseenter", placeFryingPanOnStove)

    }

    function stap8() {
        onionsliced.addEventListener("mouseenter", pickUpOnionListener);
    }

    function pickUpOnionListener() {
        console.log("Onion picked up");
        camera.appendChild(onionsliced)
        onionsliced.setAttribute("rotation", "90 0 0")
        onionsliced.setAttribute("position", "0.5 0 -1")
        onionsliced.removeEventListener("mouseenter", pickUpOnionListener);
        putOnionInPanListener();
    }


    function putOnionInPanListener() {
        onionSlicedPointer.addEventListener("mouseenter", putOnionInPanHandler)
    }

    function putOnionInPanHandler() {
        onionsliced.setAttribute("visible", "false")
        onionSlicedPointer.setAttribute("visible", "true")
        onionSlicedPointer.removeEventListener("mouseenter", putOnionInPanHandler)
        turnOnStoveListener();
    }

    function turnOnStoveListener() {
        stovebutton.addEventListener("mouseenter", turnOnStoveHandler);
    }

    function turnOnStoveHandler() {
        stovefire.setAttribute('visible', 'true');
        firestartaudio.play();

        uitlegstap8.setAttribute('visible', 'false');
        uitlegstap9.setAttribute('visible', 'true');
        stovebutton.removeEventListener("mouseenter", turnOnStoveHandler);
        stap9()
    };

    // hamburger op broodje
    function stap9() {
        burgerpointer.addEventListener("mouseenter", burgerToBunPickUpHandler);
    }

    function burgerToBunPickUpHandler() {
        console.log("Burger oppakken")
        HamburgerSoundGril.play()

        camera.appendChild(burgerpointer);
        camera.appendChild(gesnedenknoflookpointer);
        burgerpointer.setAttribute("position", "0.4640895298767826 -0.17 -0.428");
        burgerpointer.setAttribute("rotation", "0 180 0");

        gesnedenknoflookpointer.setAttribute("position", "0.4640895298767826 -0.17 -0.428");
        gesnedenknoflookpointer.setAttribute("rotation", "0 180 0");

        burgerpointer.removeEventListener("mouseenter", burgerToBunPickUpHandler);
        burgerToBunPutDownListener();

    };

    function burgerToBunPutDownListener() {
        bottombun.addEventListener("mouseenter", burgerToBunPutDownHandler)
    }

    function burgerToBunPutDownHandler() {
        beeld.appendChild(gesnedenknoflookpointer);
        gesnedenknoflookpointer.setAttribute("position", "1.583201949741156 1.0435200004817338 -1.009390250205112");
        gesnedenknoflookpointer.setAttribute("rotation", "0 0 0");

        beeld.appendChild(burgerpointer);
        burgerpointer.setAttribute("position", "1.583201949741156 1.0435200004817338 -1.009390250205112");
        burgerpointer.setAttribute("rotation", "0 0 0");

        uitlegstap9.setAttribute('visible', 'false');
        uitlegstap10.setAttribute('visible', 'true');

        bottombun.removeEventListener("mouseenter", burgerToBunPutDownHandler)
        stap10();

    }

    // stap 10:Zet het vuur uit en doe de ui op het broodje
    function stap10() {
        stovebutton.addEventListener('mouseenter', turnOffStoveHandler);
    }

    function turnOffStoveHandler() {
        stovefire.setAttribute('visible', 'false');
        firestartaudio.pause();
        firestartaudio.currentTime = 0;
        stovebutton.removeEventListener('mouseenter', turnOffStoveHandler);
        pickUpOnionFromPanListener();
    }

    function pickUpOnionFromPanListener() {
        onionSlicedPointer.addEventListener('mouseenter', pickUpOnionFromPanHandler)
    }

    function pickUpOnionFromPanHandler() {
        camera.appendChild(onionSlicedPointer);
        onionSlicedPointer.setAttribute("position", "0.4640895298767826 -0.17 -0.428");
        onionSlicedPointer.setAttribute("rotation", "0 0 0");

        onionSlicedPointer.removeEventListener('mouseenter', pickUpOnionFromPanHandler)
        putOnionOnBunListener();
    }

    function putOnionOnBunListener() {
        bottombun.addEventListener('mouseenter', putOnionOnBunHandler)
    }

    function putOnionOnBunHandler() {
        beeld.appendChild(onionSlicedPointer);
        onionSlicedPointer.setAttribute("position", "1.583 1.06 -1.009390250205112");

        bottombun.removeEventListener('mouseenter', putOnionOnBunHandler);

        uitlegstap10.setAttribute('visible', 'false');
        uitlegstap11.setAttribute('visible', 'true');

        stap11();
    }

    //Stap11: Doe de sla op het broodje

    function stap11() {
        slagesneden.addEventListener('mouseenter', pickUpSlaFromPlate)
    }

    function pickUpSlaFromPlate() {
        camera.appendChild(slagesneden);
        slagesneden.setAttribute("position", "0.4640895298767826 -0.17 -0.428");
        slagesneden.setAttribute("rotation", "0 0 0");

        slagesneden.removeEventListener('mouseenter', pickUpSlaFromPlate)
        putSlaOnBunListener();
    }

    function putSlaOnBunListener() {
        bottombun.addEventListener('mouseenter', putSlaOnBunHandler)
    }

    function putSlaOnBunHandler() {
        beeld.appendChild(slagesneden);
        slagesneden.setAttribute("position", "1.583 1.07 -1.009390250205112");

        bottombun.removeEventListener('mouseenter', putSlaOnBunHandler);

        uitlegstap11.setAttribute('visible', 'false');
        uitlegstap12.setAttribute('visible', 'true');

        stap12();
    }

    //Stap12: Doe de tomaat op het broodje
    function stap12() {
        tomaatgesneden.addEventListener('mouseenter', pickUpTomaatFromPlate)
    }

    function pickUpTomaatFromPlate() {
        camera.appendChild(tomaatgesneden);
        tomaatgesneden.setAttribute("position", "0.464 -0.17 -0.428");
        tomaatgesneden.setAttribute("rotation", "0 0 0");

        tomaatgesneden.removeEventListener('mouseenter', pickUpTomaatFromPlate)
        putTomaatOnBunListener();
    }

    function putTomaatOnBunListener() {
        bottombun.addEventListener('mouseenter', putTomaatOnBunHandler)
    }

    function putTomaatOnBunHandler() {
        beeld.appendChild(tomaatgesneden);
        tomaatgesneden.setAttribute("position", "1.493 1.06 -1.009390250205112");

        bottombun.removeEventListener('mouseenter', putTomaatOnBunHandler);

        uitlegstap12.setAttribute('visible', 'false');
        uitlegstap13.setAttribute('visible', 'true');

        topbun.setAttribute('position', "1.5809927105652637 1.115 -1.0096444107167932")
        topbun.setAttribute("rotation", "0 0 0");

        stap13();
    }

    //Stap13: Eetsmakelijk
    function stap13() {
        //done
    }
}