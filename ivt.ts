﻿

declare var jQuery;
// dev branch test 3

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
    }

    export module Verbs {

        var allVerbList: ivt.VerbInfo[] = null;

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

        function getAllVerbs() {
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

        export function getRandomList(count: number): ivt.VerbInfo[]{

            if (allVerbList == null) {
                allVerbList = getAllVerbs();
            }

            var tempList = allVerbList.slice(0, allVerbList.length - 1);
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

            if (count === NaN)
                count = 10;
            return resList.slice(0, count);
        }

    }

    export module ui {
    }

    export var currentVerb: number = 0;
    var verbsToLearn: number = 10;
    export var verbsIncorrect: number;
    export var verbsCorrect: number;

    var selectedVerbList: ivt.VerbInfo[];
    var learnVerbList: ivt.VerbInfo[]; // selectedVerbList + repetitions


    function updateProgressView() {
        jQuery("#verbNumberLabel").text(currentVerb + 1);
        jQuery("#verbCountLabel").text(learnVerbList.length);
        jQuery("#verbToLearnLabel").text(verbsToLearn);
        jQuery("#verbRepetitionsLabel").text((verbsIncorrect * 2));

        var verb = learnVerbList[currentVerb];
        var vInfos = new Array();
        if (verb.ValidAnswers > 0) {
            vInfos.push('<span style="color:DarkGreen;">Valid answers: ' + verb.ValidAnswers + '</span>');
        }
        if (verb.Errors > 0) {
            vInfos.push('<span style="color:maroon;">Mistakes: ' + verb.Errors + '</span>');
        }
        var repLeft = verb.Repetitions - verb.ValidAnswers;
        if (repLeft> 0) {
            vInfos.push('<span style="color:black;">Repetitions: ' + repLeft + '</span>');
        }

        if (vInfos.length > 0) {
            jQuery("#verbInfo").html(vInfos.join(" | "));
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


    function setVerb(verb: ivt.VerbInfo) {
        jQuery("#verbLabel").text(verb.Form1);
        jQuery("#verbNativeLabel").text(verb.Native);
    }

    export function startNewLesson() {
        verbsToLearn = parseInt(jQuery("#verbsToLearnBox").val());
        if (isNaN(verbsToLearn))
        {
            alert("Ivalid value: 'Count of verbs to learn'");
            return;
        }
        selectedVerbList = Verbs.getRandomList(verbsToLearn);
        learnVerbList = selectedVerbList.slice(0, verbsToLearn);

        //Summary.Clear();
        currentVerb = 0;
        verbsIncorrect = 0;
        verbsCorrect = 0;
        clearAnswers();
        setVerb(learnVerbList[currentVerb]);
        updateProgressView();
    }



    function imputIsValid(validVerb: string, formNo: number): bool {
        var boxElem = jQuery("#" + "verbForm" + formNo + "Box");
        var lblElem = jQuery("#" + "verbForm" + formNo + "Label");
        var input = boxElem.val();
        if (input == null)
            input = "";
        if (validVerb == null)
            validVerb = "ERROR";


        var res = input.toLowerCase() == validVerb.toLowerCase();
        if (!res) {
            boxElem.closest('div').css("background-color", "PapayaWhip");
            boxElem.attr("placeholder", validVerb).blur();
            lblElem.text(validVerb);
            if (!invalidInputSelected) {
                boxElem.select();
                boxElem.focus();
                invalidInputSelected = true;
            }
        }
        else {
            boxElem.closest('div').css("background-color", "");
            boxElem.attr("placeholder", "");
            lblElem.html("&nbsp;");
        }

        return res;
    }

    var invalidInputSelected: bool = false;
    function imputsAreValid(verb: ivt.VerbInfo): bool {
        invalidInputSelected = false;

        var v1 = imputIsValid(verb.Form1, 1); // wykonaj funkcję dla wszystkich box'ów
        var v2 = imputIsValid(verb.Form2, 2);
        var v3 = imputIsValid(verb.Form3, 3);
        return v1 && v2 && v3; // gdy v1=false nie wykonuje kolejnych sprawdzeń
    }


    export function goToNextVerb() {
        var verb = learnVerbList[currentVerb];
        verb.Answers += 1;

        var valid = imputsAreValid(verb);
        if (valid) {
            verb.ValidAnswers += 1
                verbsCorrect++;
            clearAnswers();
            currentVerb++;
            if (currentVerb > learnVerbList.length - 1)
                jQuery.mobile.changePage("#results", { transition: "slide" });
            else {
                setVerb(learnVerbList[currentVerb]);
                updateProgressView();
            }
            jQuery("#verbForm1Box").select();
            jQuery("#verbForm1Box").focus();
        }
        else {
            verbsIncorrect++;
            var pos = currentVerb + 5;
            if (pos > learnVerbList.length)
                pos = learnVerbList.length;
            var cv = learnVerbList[currentVerb];
            learnVerbList.splice(pos, 0, cv);  // Powtórz za chwilę
            learnVerbList.push(cv); // i na końcu

            verb.Repetitions += 2;
            verb.Errors += 1;
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
            if (verb == learnVerbList[currentVerb])
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
        return "<tr>"
            + "<th>" + no + "</th>"
            + "<td><strong>" + verb.Form1 + "</strong></td>"
            + "<td>" + verb.Answers + "</td>"
            + "<td>" + verb.ValidAnswers + "</td>"
            + "<td>" + verb.Errors + "</td>"
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



        /*
        var hdr = document.createElement('div');
        hdr.appendChild(getSpan("Lesson finished"));
        hdr.style.fontWeight = "bold";
        verbsTable.appendChild(hdr);

        //summaryArr.sort();
        for (var sk in summaryArr) {
            var div = document.createElement('div');
            var kName = sk.toString() + " mistakes: ";
            if (kName == "0 mistakes: ") {
                kName = "Correct: ";
                div.style.color = "DarkGreen";
            }
            else {
                div.style.color = "Maroon";
            }
            if (kName == "1 mistakes: ") {
                kName = "1 mistake: ";
            }
            div.appendChild(getSpan(kName));

            var sValues = summaryArr[sk].join();
            div.appendChild(getSpan(sValues));

            verbsTable.appendChild(div);
        }
*/
    }


}

jQuery(document).ready(function () {
    // nothing to do
});

jQuery(document).on("pagebeforeshow", "#lesson", function (event) {
    ivt.startNewLesson();
});

jQuery(document).on("pagebeforeshow", "#results", function (event) {
    ivt.loadTestResults();
});


