

declare var jQuery;

// Module
module ivt {


    export class VerbInfo {
        Form1: string;
        Form2: string;
        Form3: string;
        Native: string;
        Group: string;
        Errors: number;
        Repetitions: number;
        ValidAnswers: number;
        Answers: number;

        public getNative() {
            var nav: any = window.navigator;
            var navLang: string = (nav.userLanguage || nav.language || "");
            if (navLang.toLowerCase().match("^pl")) {
                return this.Native;
            }
            else {
                return "";
            }
        }
    }

    export module Verbs {

        function getVerb(verbForms: string): ivt.VerbInfo {
            var forms = verbForms.split('	');
            var v = new ivt.VerbInfo();
            v.Form1 = forms[0].trim();
            v.Form2 = forms[1].trim();
            v.Form3 = forms[2].trim();
            v.Native = forms[3].trim();
            if (forms.length > 4)
                v.Group = forms[4].trim();

            return v;
        }

        export function getAllVerbs() {
            var res = new Array<ivt.VerbInfo>();

            res.push(getVerb("be/am/is/are	was/were	been	być"));
            res.push(getVerb("become	became	become	stawać się"));
            res.push(getVerb("begin	began	begun	zaczynać"));
            res.push(getVerb("blow	blew	blown	wiać"));
            res.push(getVerb("break	broke	broken	łamać"));
            res.push(getVerb("bring	brought	brought	przynosić"));
            res.push(getVerb("build	built	built	budować"));
            res.push(getVerb("burn	burned	burnt	spalić"));
            res.push(getVerb("burst	burst	burst	wybuchać, pękać"));
            res.push(getVerb("buy	bought	bought	kupować"));
            res.push(getVerb("can	could	been able to	umieć, móc, potrafić"));
            res.push(getVerb("catch	caught	caught	chwytać, łapać"));
            res.push(getVerb("choose	chose	chosen	wybierać"));
            res.push(getVerb("come	came	come	przybywać"));
            res.push(getVerb("cost	cost	cost	kosztować"));
            res.push(getVerb("cut	cut	cut	ciąć"));
            res.push(getVerb("dig	dug	dug	wykopywać, kopać"));
            res.push(getVerb("do	did	done	robić"));
            res.push(getVerb("draw	drew	drawn	narysować, naszkicowa"));
            res.push(getVerb("dream	dreamt	dreamed	śnić"));
            res.push(getVerb("drink	drank	drunk	pić"));
            res.push(getVerb("drive	drove	driven	kierować"));
            res.push(getVerb("eat	ate	eaten	jeść"));
            res.push(getVerb("fall	fell	fallen	upadać"));
            res.push(getVerb("feed	fed	fed	żywić, karmić"));
            res.push(getVerb("feel	felt	felt	czuć"));
            res.push(getVerb("fight	fought	fought	walczyć"));
            res.push(getVerb("find	found	found	znajdować"));
            res.push(getVerb("fly	flew	flown	latać"));
            res.push(getVerb("forget	forgot	forgotten	zapominać"));
            res.push(getVerb("forgive	forgave	forgiven	wybaczać"));
            res.push(getVerb("get	got	got	dostawać"));
            res.push(getVerb("give	gave	given	dawać"));
            res.push(getVerb("go	went	gone	iść, jechać"));
            res.push(getVerb("grow	grew	grown	rosnąć"));
            res.push(getVerb("hang	hung	hung	wieszać się, kogoś/coś"));
            res.push(getVerb("have	had	had	mieć"));
            res.push(getVerb("hear	heard	heard	słyszeć"));
            res.push(getVerb("hide	hid	hid	ukrywać się"));
            res.push(getVerb("hit	hit	hit	uderzać"));
            res.push(getVerb("hold	held	held	trzymać"));
            res.push(getVerb("hurt	hurt	hurt	ranić"));
            res.push(getVerb("keep	kept	kept	trzymać"));
            res.push(getVerb("know	knew	known	znać, wiedzieć"));
            res.push(getVerb("lead	led	led	prowadzić"));
            res.push(getVerb("learn	learnt	learnt	uczyc się"));
            res.push(getVerb("leave	left	left	opuszczać, wyjeżdżać"));
            res.push(getVerb("lend	lent	lent	pożyczać komuś"));
            res.push(getVerb("let	let	let	pozwalać"));
            res.push(getVerb("lie	lay	lain	leżeć"));
            res.push(getVerb("light	lit	lighted	zapalać, podpalać"));
            res.push(getVerb("lose	lost	lost	gubic, tracić"));
            res.push(getVerb("make	made	made	robić"));
            res.push(getVerb("mean	mean	meant	znaczyć"));
            res.push(getVerb("meet	met	met	spotykać"));
            res.push(getVerb("must/have to	had to	had to	musieć"));
            res.push(getVerb("pay	paid	paid	płacić"));
            res.push(getVerb("put	put	put	kłaść"));
            res.push(getVerb("read	read	read	czytać"));
            res.push(getVerb("ride	rode	ridden	jeździć (na czymś)"));
            res.push(getVerb("rise	rose	risen	rosnąć"));
            res.push(getVerb("ring	rang	rung	dzwonić"));
            res.push(getVerb("run	ran	run	biec"));
            res.push(getVerb("say	said	said	mówić"));
            res.push(getVerb("see	saw	seen	widzieć"));
            res.push(getVerb("sell	sold	sold	sprzedawać"));
            res.push(getVerb("send	sent	sent	wysyłać"));
            res.push(getVerb("set	set	set	umieszczać, postawić"));
            res.push(getVerb("shine	shone	shone	zaświecić (czymś)"));
            res.push(getVerb("show	showed	shown	pokazywać"));
            res.push(getVerb("shut	shut	shut	zamykać, zatrzaskiwać"));
            res.push(getVerb("sing	sang	sung	śpiewać"));
            res.push(getVerb("sink	sank	sunk	tonąć"));
            res.push(getVerb("sit	sat	sat	siedzieć"));
            res.push(getVerb("sleep	slept	slept	spać"));
            res.push(getVerb("smell	smelled	smelt	wąchać, pachnieć"));
            res.push(getVerb("speak	spoke	spoken	mówić"));
            res.push(getVerb("spend	spent	spent	spędzać"));
            res.push(getVerb("spill	spilt	spilled	rozlewać"));
            res.push(getVerb("stand	stood	stood	stać"));
            res.push(getVerb("steal	stole	stolen	kraść"));
            res.push(getVerb("swim	swam	swum	pływać"));
            res.push(getVerb("take	took	taken	brać"));
            res.push(getVerb("teach	taught	taught	uczyć"));
            res.push(getVerb("tear	torn	torn	drzeć, rozrywać"));
            res.push(getVerb("tell	told	told	mówić"));
            res.push(getVerb("think	thought	thought	mysleć"));
            res.push(getVerb("throw	threw	thrown	wyrzucać"));
            res.push(getVerb("understand	understood	understood	rozumieć"));
            res.push(getVerb("wake	woke	woken	budzić się"));
            res.push(getVerb("wear	wore	wore	być ubranym w coś"));
            res.push(getVerb("win	won	won	wygrywać"));
            res.push(getVerb("write	wrote	written	pisać"));


            return res;
        }

        export function getBasicVerbs() {
            // From http://www.esl-lounge.com/reference/grammar-reference-most-common-irregular-verb-list.php

            var res = new Array<ivt.VerbInfo>();
            res.push(getVerb("be/am/is/are	was/were	been	być"));
            res.push(getVerb("do	did	done	robić"));
            res.push(getVerb("have	had	had	mieć"));

            res.push(getVerb("say	said	said	mówić"));
            res.push(getVerb("make	made	made	robić"));
            res.push(getVerb("go	went	gone	iść, jechać"));
            res.push(getVerb("take	took	taken	brać"));
            res.push(getVerb("come	came	come	przybywać"));
            res.push(getVerb("see	saw	seen	widzieć"));
            res.push(getVerb("know	knew	known	znać, wiedzieć"));
            res.push(getVerb("get	got	got	dostawać"));
            res.push(getVerb("give	gave	given	dawać"));
            res.push(getVerb("find	found	found	znajdować"));
            res.push(getVerb("think	thought	thought	mysleć"));
            res.push(getVerb("tell	told	told	mówić"));
            res.push(getVerb("become	became	become	stawać się"));
            res.push(getVerb("show	showed	shown	pokazywać"));
            res.push(getVerb("leave	left	left	opuszczać, wyjeżdżać"));
            res.push(getVerb("feel	felt	felt	czuć"));
            res.push(getVerb("put	put	put	kłaść"));
            res.push(getVerb("bring	brought	brought	przynosić"));
            res.push(getVerb("begin	began	begun	zaczynać"));
            res.push(getVerb("keep	kept	kept	trzymać"));
            res.push(getVerb("hold	held	held	trzymać"));
            res.push(getVerb("write	wrote	written	pisać"));
            res.push(getVerb("stand	stood	stood	stać"));
            res.push(getVerb("hear	heard	heard	słyszeć"));
            res.push(getVerb("let	let	let	pozwalać"));
            res.push(getVerb("mean	mean	meant	znaczyć"));
            res.push(getVerb("set	set	set	umieszczać, postawić"));
            res.push(getVerb("meet	met	met	spotykać"));
            res.push(getVerb("run	ran	run	biec"));
            res.push(getVerb("pay	paid	paid	płacić"));
            res.push(getVerb("sit	sat	sat	siedzieć"));
            res.push(getVerb("speak	spoke	spoken	mówić"));
            res.push(getVerb("lie	lay	lain	leżeć"));
            res.push(getVerb("lead	led	led	prowadzić"));
            res.push(getVerb("read	read	read	czytać"));
            res.push(getVerb("grow	grew	grown	rosnąć"));
            res.push(getVerb("lose	lost	lost	gubic, tracić"));
            res.push(getVerb("fall	fell	fallen	upadać"));
            res.push(getVerb("send	sent	sent	wysyłać"));
            res.push(getVerb("build	built	built	budować"));
            res.push(getVerb("understand	understood	understood	rozumieć"));
            res.push(getVerb("draw	drew	drawn	narysować, naszkicowa"));
            res.push(getVerb("break	broke	broken	łamać"));
            res.push(getVerb("spend	spent	spent	spędzać"));
            res.push(getVerb("cut	cut	cut	ciąć"));
            res.push(getVerb("rise	rose	risen	rosnąć"));
            res.push(getVerb("drive	drove	driven	kierować"));
            res.push(getVerb("buy	bought	bought	kupować"));
            res.push(getVerb("wear	wore	wore	być ubranym w coś"));
            res.push(getVerb("choose	chose	chosen	wybierać"));

            return res;
        }



        export function getVerbsGroup1() {
            var res = new Array<ivt.VerbInfo>();
            res.push(getVerb("bring	brought	brought	przynosić"));
            res.push(getVerb("buy	bought	bought	kupować"));
            res.push(getVerb("catch	caught	caught	chwytać, łapać"));
            res.push(getVerb("fight	fought	fought	walczyć"));
            res.push(getVerb("teach	taught	taught	uczyć"));
            res.push(getVerb("think	thought	thought	mysleć"));

            res.push(getVerb("stand	stood	stood	stać"));
            res.push(getVerb("understand	understood	understood	rozumieć"));

            return res;
        }

        export function getVerbsGroup2() {
            var res = new Array<ivt.VerbInfo>();

            res.push(getVerb("break	broke	broken	łamać"));
            res.push(getVerb("burn	burned	burnt	spalić"));
            res.push(getVerb("choose	chose	chosen	wybierać"));;
            res.push(getVerb("dream	dreamt	dreamed	śnić"));
            res.push(getVerb("drive	drove	driven	kierować"));
            res.push(getVerb("eat	ate	eaten	jeść"));
            res.push(getVerb("fall	fell	fallen	upadać"));
            res.push(getVerb("forget	forgot	forgotten	zapominać"));
            res.push(getVerb("forgive	forgave	forgiven	wybaczać"));
            res.push(getVerb("give	gave	given	dawać"));
            res.push(getVerb("light	lit	lighted	zapalać, podpalać"));
            res.push(getVerb("ride	rode	ridden	jeździć (na czymś)"));
            res.push(getVerb("rise	rose	risen	rosnąć"));
            res.push(getVerb("show	showed	shown	pokazywać"));
            res.push(getVerb("smell	smelled	smelt	wąchać, pachnieć"));
            res.push(getVerb("speak	spoke	spoken	mówić"));
            res.push(getVerb("spill	spilt	spilled	rozlewać"));
            res.push(getVerb("steal	stole	stolen	kraść"));
            res.push(getVerb("take	took	taken	brać"));
            res.push(getVerb("wake	woke	woken	budzić się"));
            res.push(getVerb("write	wrote	written	pisać"));


            return res;
        }

        export function getVerbsGroup3() {
            var res = new Array<ivt.VerbInfo>();

            res.push(getVerb("become	became	become	stawać się"));
            res.push(getVerb("begin	began	begun	zaczynać"));
            res.push(getVerb("blow	blew	blown	wiać"));
            res.push(getVerb("break	broke	broken	łamać"));
            res.push(getVerb("burn	burned	burnt	spalić"));
            res.push(getVerb("can	could	been able to	umieć, móc, potrafić"));
            res.push(getVerb("choose	chose	chosen	wybierać"));
            res.push(getVerb("come	came	come	przybywać"));
            res.push(getVerb("do	did	done	robić"));
            res.push(getVerb("draw	drew	drawn	narysować, naszkicowa"));
            res.push(getVerb("dream	dreamt	dreamed	śnić"));
            res.push(getVerb("drink	drank	drunk	pić"));
            res.push(getVerb("drive	drove	driven	kierować"));
            res.push(getVerb("eat	ate	eaten	jeść"));
            res.push(getVerb("fall	fell	fallen	upadać"));
            res.push(getVerb("fly	flew	flown	latać"));
            res.push(getVerb("forget	forgot	forgotten	zapominać"));
            res.push(getVerb("forgive	forgave	forgiven	wybaczać"));
            res.push(getVerb("give	gave	given	dawać"));
            res.push(getVerb("go	went	gone	iść, jechać"));
            res.push(getVerb("grow	grew	grown	rosnąć"));
            res.push(getVerb("have	had	had	mieć"));
            res.push(getVerb("know	knew	known	znać, wiedzieć"));
            res.push(getVerb("lie	lay	lain	leżeć"));
            res.push(getVerb("light	lit	lighted	zapalać, podpalać"));
            res.push(getVerb("mean	mean	meant	znaczyć"));
            res.push(getVerb("must/have to	had to	had to	musieć"));
            res.push(getVerb("ride	rode	ridden	jeździć (na czymś)"));
            res.push(getVerb("rise	rose	risen	rosnąć"));
            res.push(getVerb("ring	rang	rung	dzwonić"));
            res.push(getVerb("run	ran	run	biec"));
            res.push(getVerb("see	saw	seen	widzieć"));
            res.push(getVerb("show	showed	shown	pokazywać"));
            res.push(getVerb("shut	shut	shut	zamykać, zatrzaskiwać"));
            res.push(getVerb("smell	smelled	smelt	wąchać, pachnieć"));
            res.push(getVerb("speak	spoke	spoken	mówić"));
            res.push(getVerb("spill	spilt	spilled	rozlewać"));
            res.push(getVerb("steal	stole	stolen	kraść"));
            res.push(getVerb("swim	swam	swum	pływać"));
            res.push(getVerb("take	took	taken	brać"));
            res.push(getVerb("teach	taught	taught	uczyć"));
            res.push(getVerb("throw	threw	thrown	wyrzucać"));
            res.push(getVerb("wake	woke	woken	budzić się"));
            res.push(getVerb("write	wrote	written	pisać"));


            return res;
        }

        export function getVerbsGroup4() {
            var res = new Array<ivt.VerbInfo>();

            res.push(getVerb("build	built	built	budować"));
            res.push(getVerb("burst	burst	burst	wybuchać, pękać"));
            res.push(getVerb("buy	bought	bought	kupować"));
            res.push(getVerb("cost	cost	cost	kosztować"));
            res.push(getVerb("cut	cut	cut	ciąć"));
            res.push(getVerb("feed	fed	fed	żywić, karmić"));
            res.push(getVerb("feel	felt	felt	czuć"));
            res.push(getVerb("fight	fought	fought	walczyć"));
            res.push(getVerb("find	found	found	znajdować"));
            res.push(getVerb("get	got	got	dostawać"));
            res.push(getVerb("hang	hung	hung	wieszać się, kogoś/coś"));
            res.push(getVerb("have	had	had	mieć"));
            res.push(getVerb("hear	heard	heard	słyszeć"));
            res.push(getVerb("hide	hid	hid	ukrywać się"));
            res.push(getVerb("hit	hit	hit	uderzać"));
            res.push(getVerb("hold	held	held	trzymać"));
            res.push(getVerb("hurt	hurt	hurt	ranić"));
            res.push(getVerb("keep	kept	kept	trzymać"));
            res.push(getVerb("lead	led	led	prowadzić"));
            res.push(getVerb("learn	learnt	learnt	uczyc się"));
            res.push(getVerb("leave	left	left	opuszczać, wyjeżdżać"));
            res.push(getVerb("lend	lent	lent	pożyczać komuś"));
            res.push(getVerb("let	let	let	pozwalać"));
            res.push(getVerb("lose	lost	lost	gubic, tracić"));
            res.push(getVerb("make	made	made	robić"));
            res.push(getVerb("meet	met	met	spotykać"));
            res.push(getVerb("pay	paid	paid	płacić"));
            res.push(getVerb("put	put	put	kłaść"));
            res.push(getVerb("read	read	read	czytać"));
            res.push(getVerb("say	said	said	mówić"));
            res.push(getVerb("sell	sold	sold	sprzedawać"));
            res.push(getVerb("send	sent	sent	wysyłać"));
            res.push(getVerb("set	set	set	umieszczać, postawić"));
            res.push(getVerb("shine	shone	shone	zaświecić (czymś)"));
            res.push(getVerb("shut	shut	shut	zamykać, zatrzaskiwać"));
            res.push(getVerb("sit	sat	sat	siedzieć"));
            res.push(getVerb("sleep	slept	slept	spać"));
            res.push(getVerb("spend	spent	spent	spędzać"));
            res.push(getVerb("stand	stood	stood	stać"));
            res.push(getVerb("teach	taught	taught	uczyć"));
            res.push(getVerb("tear	torn	torn	drzeć, rozrywać"));
            res.push(getVerb("tell	told	told	mówić"));
            res.push(getVerb("think	thought	thought	mysleć"));
            res.push(getVerb("understand	understood	understood	rozumieć"));
            res.push(getVerb("wear	wore	wore	być ubranym w coś"));
            res.push(getVerb("win	won	won	wygrywać"));


            return res;
        }

        export function getRandomList(verbs: ivt.VerbInfo[]): ivt.VerbInfo[] {

            var tempList = verbs.slice(0, verbs.length);
            var resList = new Array<ivt.VerbInfo>(); // = new List < VerbInfo > ();

            while (tempList.length > 0) {
                var i = Math.floor(Math.random() * tempList.length);
                var v = tempList[i];
                v.Errors = 0;
                v.ValidAnswers = 0;
                v.Answers = 0;
                v.Repetitions = 0;
                tempList.splice(i, 1);
                resList.push(v);
            }

            if (ivt.verbsToLearn === NaN)
                ivt.verbsToLearn = resList.length;
            if (ivt.verbsToLearn > resList.length)
                ivt.verbsToLearn = resList.length;
            return resList.slice(0, ivt.verbsToLearn);
        }

    }

    export module ui {
    }

    export var currentVerb: number = 0;
    export var verbsToLearn: number = 30;
    export var repeatIncorrectVerbAfter: number = 3;
    export var verbsIncorrect: number;
    export var verbsCorrect: number;


    var selectedVerbList: ivt.VerbInfo[];
    var learnVerbList: ivt.VerbInfo[]; // selectedVerbList + repetitions

    function isLanguage(lang: string): boolean {
        var nav: any = window.navigator;
        var navLang = (nav.userLanguage || nav.language || "").toLower();
        return navLang.match("^" + lang)
    }

    function updateProgressView() {
        jQuery("#verbNumberLabel").text(ivt.currentVerb + 1);
        jQuery("#verbCountLabel").text(learnVerbList.length);
        jQuery("#verbToLearnLabel").text(ivt.verbsToLearn);
        jQuery("#verbRepetitionsLabel").text((ivt.verbsIncorrect * 2));

        var verb = learnVerbList[ivt.currentVerb];
        var vInfos = new Array();
        if (verb.ValidAnswers > 0) {
            vInfos.push('<span style="color:DarkGreen;">&#10003; ' + verb.ValidAnswers + '</span>');
        }
        if (verb.Errors > 0) {
            vInfos.push('<span style="color:maroon;">&times; ' + verb.Errors + '</span>');
        }
        var repLeft = verb.Repetitions - verb.ValidAnswers;
        if (repLeft >= 0) {
            vInfos.push('<span style="color:black;">&raquo; ' + (repLeft + 1) + '</span>');
        }

        var sep = '<span style="font-size:small; color:silver;"> | </span>';
        if (vInfos.length > 0) {
            jQuery("#verbInfo").html(sep + vInfos.join(sep) + sep);
        }
        else {
            jQuery("#verbInfo").text("");
        }
    }

    function clearAnswers() {
        jQuery("#verbForm1Box").val("").attr("placeholder", "").closest('div').css("background-color", "");
        jQuery("#verbForm2Box").val("").attr("placeholder", "").closest('div').css("background-color", "");
        jQuery("#verbForm3Box").val("").attr("placeholder", "").closest('div').css("background-color", "");
        jQuery("#verbForm1Label").html("&nbsp;");
        jQuery("#verbForm2Label").html("&nbsp;");
        jQuery("#verbForm3Label").html("&nbsp;");
    }

    function scrollToElment(id: string) {
        var verbTop = jQuery(id).offset().top - jQuery("#lesson-header").height() - 2;// - jQuery("#verbLabel").height();
        if (verbTop < 0) {
            return;
        }
        var docTop = jQuery(document).scrollTop();
        if (docTop > verbTop) {
            jQuery.mobile.silentScroll(verbTop);
        }
    }

    function setVerb(verb: ivt.VerbInfo) {
        jQuery("#verbLabel").text(verb.Form1);
        jQuery("#verbNativeLabel").text(verb.getNative());
        jQuery("#verbForm1Box").select();
        jQuery("#verbForm1Box").focus();
        scrollToElment("#verbLabel");
    }



    function imputIsValid(validVerb: string, formNo: number): boolean {
        var boxElem = jQuery("#" + "verbForm" + formNo + "Box");
        var lblElem = jQuery("#" + "verbForm" + formNo + "Label");
        var input = boxElem.val();
        if (input == null)
            input = "";
        if (validVerb == null)
            validVerb = "ERROR";



        var res = input.toLowerCase().trim() == validVerb.toLowerCase();
        if (!res) {
            boxElem.closest('div').css("background-color", "PapayaWhip");
            boxElem.attr("placeholder", validVerb).blur();
            lblElem.text(validVerb);
            if (!invalidInputSelected) {
                boxElem.select();
                boxElem.focus();
                invalidInputSelected = true;
                scrollToElment("#verbForm" + formNo + "Label");
            }
        }
        else {
            boxElem.closest('div').css("background-color", "");
            boxElem.attr("placeholder", "");
            lblElem.html("&nbsp;");
        }

        return res;
    }

    var invalidInputSelected: boolean = false;
    function imputsAreValid(verb: ivt.VerbInfo): boolean {
        invalidInputSelected = false;

        var v1 = imputIsValid(verb.Form1, 1); // wykonaj funkcję dla wszystkich box'ów
        var v2 = imputIsValid(verb.Form2, 2);
        var v3 = imputIsValid(verb.Form3, 3);
        return v1 && v2 && v3; // gdy v1=false nie wykonuje kolejnych sprawdzeń
    }

    function goToResults() {
        jQuery.mobile.changePage("#results", { transition: "slide", changeHash: false });
    }

    export function goToNextVerb() {
        var verb = learnVerbList[ivt.currentVerb];
        verb.Answers += 1;

        var valid = imputsAreValid(verb);
        if (valid) {
            ivt.verbsCorrect++;
            verb.ValidAnswers += 1
            ivt.currentVerb++;

            clearAnswers();
            if (ivt.currentVerb > learnVerbList.length - 1) {
                goToResults();
            }
            else {
                setVerb(learnVerbList[ivt.currentVerb]); //nextVerb (currentVerb++)
                updateProgressView();
            }
        }
        else {
            ivt.verbsIncorrect++;
            verb.Repetitions += 2;
            verb.Errors += 1;

            var pos = ivt.currentVerb + repeatIncorrectVerbAfter;
            if (pos > learnVerbList.length)
                pos = learnVerbList.length;
            var cv = learnVerbList[ivt.currentVerb];
            learnVerbList.splice(pos, 0, cv);  // Powtórz za chwilę
            learnVerbList.push(cv); // i na końcu

            updateProgressView();
        }
    }

    function updateVerbsTable() {
        var verbsTable = <HTMLDivElement>document.getElementById('verbsTable');
        while (verbsTable.hasChildNodes()) {
            verbsTable.removeChild(verbsTable.lastChild);
        }

        for (var i = 0; i < selectedVerbList.length; i++) {
            var verb = selectedVerbList[i];
            var div = document.createElement('div');
            if (verb == learnVerbList[ivt.currentVerb])
                div.style.color = "black";
            else
                div.style.color = "gray";
            //div.appendChild(getSpan(verb.Form1 + " - "));
            //div.appendChild(getSpan("correct: " + verb.ValidAnswers));
            //div.appendChild(getSpan(", wrong: " + verb.Errors));

            //var repLeft = verb.Repetitions - verb.ValidAnswers + 1
            //     div.appendChild(getSpan(", repetitions: " + repLeft));

            verbsTable.appendChild(div);
        }

    }

    function getResultsTableRow(no: number, verb: ivt.VerbInfo) {

        var icon = 'check';
        var color = 'darkgreen';

        if (verb.Errors > 1) {
            icon = 'alert';
            color = 'maroon';
        }
        else if (verb.Errors > 0) {
            icon = 'edit';
            color = 'darkorange';
        }

        var iconEl = ' <span class="ui-icon ui-icon-' + icon + ' ui-icon-shadow" style="background-color:' + color +';">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp; ';

        return "<tr>"
            + "<th>" + no + "</th>"
            + "<td><strong style='color: "+color+"'>" + verb.Form1 + "</strong></td>"
            + "<td>" + iconEl + verb.Errors + "</td>"
            + "<td>" + verb.ValidAnswers + "</td>"
            + "<td>" + verb.Answers + "</td>"
            + "<td>" + verb.Repetitions + "</td>"
            + "</tr> \r\n";

    }

    export function loadTestResults() {
        if (!(selectedVerbList)) {
            return;
        }

        var tbody = jQuery("#results-table-body");
        tbody.empty();

        for (var i = 0; i < selectedVerbList.length; i++) {
            var verb = selectedVerbList[i];
            var trow = getResultsTableRow(i + 1, verb);
            tbody.append(trow);
        }
        jQuery("#results-table").table("refresh");

        return;
    }


    export function startNewLesson() {
        learnVerbList = selectedVerbList.slice(0, ivt.verbsToLearn);

        //Summary.Clear();
        ivt.currentVerb = 0;
        ivt.verbsIncorrect = 0;
        ivt.verbsCorrect = 0;
        clearAnswers();
        setVerb(learnVerbList[ivt.currentVerb]);
        updateProgressView();
    }

    export function startCustomLevelLesson() {
        ivt.verbsToLearn = parseInt(jQuery("#verbsToLearnBox").val());
        if (isNaN(ivt.verbsToLearn)) {
            alert("Ivalid value: 'Count of verbs to learn'");
            return;
        }
        selectedVerbList = Verbs.getRandomList(Verbs.getAllVerbs());

        startNewLesson();
    }

    export function startBeginnerLevelLesson() {
        ivt.verbsToLearn = 7;
        selectedVerbList = Verbs.getRandomList(Verbs.getBasicVerbs());
        startNewLesson();
    }

    export function startBasicLevelLesson() {
        ivt.verbsToLearn = 15;
        selectedVerbList = Verbs.getRandomList(Verbs.getAllVerbs());
        startNewLesson();
    }

    export function startAdvancedLevelLesson() {
        ivt.verbsToLearn = 30;
        selectedVerbList = Verbs.getRandomList(Verbs.getAllVerbs());
        startNewLesson();
    }

    export function startGroup1Lesson() {
        ivt.verbsToLearn = 7;
        selectedVerbList = Verbs.getRandomList(Verbs.getVerbsGroup1());
        startNewLesson();
    }

    export function startGroup2Lesson() {
        ivt.verbsToLearn = 15;
        selectedVerbList = Verbs.getRandomList(Verbs.getVerbsGroup2());
        startNewLesson();
    }

    export function startGroup3Lesson() {
        ivt.verbsToLearn = 15;
        selectedVerbList = Verbs.getRandomList(Verbs.getVerbsGroup3());
        startNewLesson();
    }

    export function startGroup4Lesson() {
        ivt.verbsToLearn = 15;
        selectedVerbList = Verbs.getRandomList(Verbs.getVerbsGroup4());
        startNewLesson();
    }
}

jQuery(document).ready(function () {
    jQuery.mobile.changePage.defaults.changeHash = false;

});

jQuery(document).on("pagebeforeshow", "#config", function (event) {

    jQuery("#beginnerVerbsCountLabel").text(ivt.Verbs.getBasicVerbs().length);
    jQuery("#basicVerbsCountLabel, #advancedVerbsCountLabel").text(ivt.Verbs.getAllVerbs().length);

    jQuery("#group1VerbsCountLabel").text(ivt.Verbs.getVerbsGroup1().length);
    jQuery("#group2VerbsCountLabel").text(ivt.Verbs.getVerbsGroup2().length);
    jQuery("#group3VerbsCountLabel").text(ivt.Verbs.getVerbsGroup3().length);
    jQuery("#group4VerbsCountLabel").text(ivt.Verbs.getVerbsGroup4().length);
});

jQuery(document).on("pagebeforeshow", "#lesson", function (event) {
    //ivt.startNewLesson();
});

jQuery(document).on("pagebeforeshow", "#results", function (event) {
    ivt.loadTestResults();
});



