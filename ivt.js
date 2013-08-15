// Module
var ivt;
(function (ivt) {
    var VerbInfo = (function () {
        function VerbInfo() {
        }
        return VerbInfo;
    })();
    ivt.VerbInfo = VerbInfo;

    (function (Verbs) {
        var allVerbList = null;

        function getVerb(verbForms) {
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
            var res = new Array();

            res.push(getVerb("be/am/is/are	was/were	been	byæ"));
            res.push(getVerb("become	became	become	stawaæ siê"));
            res.push(getVerb("begin	began	begun	zaczynaæ"));
            res.push(getVerb("blow	blew	blown	wiaæ"));
            res.push(getVerb("break	broke	broken	³amaæ"));
            res.push(getVerb("bring	brought	brought	przynosiæ"));
            res.push(getVerb("build	built	built	budowaæ"));
            res.push(getVerb("burn	burned	burnt	spaliæ"));
            res.push(getVerb("burst	burst	burst	wybuchaæ, pêkaæ"));
            res.push(getVerb("buy	bought	bought	kupowaæ"));
            res.push(getVerb("can	could	been able to	umieæ, móc, potrafiæ"));
            res.push(getVerb("catch	caught	caught	chwytaæ, ³apaæ"));
            res.push(getVerb("choose	chose	chosen	wybieraæ"));
            res.push(getVerb("come	came	come	przybywaæ"));
            res.push(getVerb("cost	cost	cost	kosztowaæ"));
            res.push(getVerb("cut	cut	cut	ci¹æ"));
            res.push(getVerb("dig	dug	dug	wykopywaæ, kopaæ"));
            res.push(getVerb("do	did	done	robiæ"));
            res.push(getVerb("draw	drew	drawn	narysowaæ, naszkicowa"));
            res.push(getVerb("dream	dreamt	dreamed	œniæ"));
            res.push(getVerb("drink	drank	drunk	piæ"));
            res.push(getVerb("drive	drove	driven	kierowaæ"));
            res.push(getVerb("eat	ate	eaten	jeœæ"));
            res.push(getVerb("fall	fell	fallen	upadaæ"));
            res.push(getVerb("feed	fed	fed	¿ywiæ, karmiæ"));
            res.push(getVerb("feel	felt	felt	czuæ"));
            res.push(getVerb("fight	fought	fought	walczyæ"));
            res.push(getVerb("find	found	found	znajdowaæ"));
            res.push(getVerb("fly	flew	flown	lataæ"));
            res.push(getVerb("forget	forgot	forgotten	zapominaæ"));
            res.push(getVerb("forgive	forgave	forgiven	wybaczaæ"));
            res.push(getVerb("get	got	got	dostawaæ"));
            res.push(getVerb("give	gave	given	dawaæ"));
            res.push(getVerb("go	went	gone	iœæ, jechaæ"));
            res.push(getVerb("grow	grew	grown	rosn¹æ"));
            res.push(getVerb("hang	hung	hung	wieszaæ siê, kogoœ/coœ"));
            res.push(getVerb("have	had	had	mieæ"));
            res.push(getVerb("hear	heard	heard	s³yszeæ"));
            res.push(getVerb("hide	hid	hid	ukrywaæ siê"));
            res.push(getVerb("hit	hit	hit	uderzaæ"));
            res.push(getVerb("hold	held	held	trzymaæ"));
            res.push(getVerb("hurt	hurt	hurt	raniæ"));
            res.push(getVerb("keep	kept	kept	trzymaæ"));
            res.push(getVerb("know	knew	known	znaæ, wiedzieæ"));
            res.push(getVerb("lead	led	led	prowadziæ"));
            res.push(getVerb("learn	learnt	learnt	uczyc siê"));
            res.push(getVerb("leave	left	left	opuszczaæ, wyje¿d¿aæ"));
            res.push(getVerb("lend	lent	lent	po¿yczaæ komuœ"));
            res.push(getVerb("let	let	let	pozwalaæ"));
            res.push(getVerb("lie	lay	lain	le¿eæ"));
            res.push(getVerb("light	lit	lighted	zapalaæ, podpalaæ"));
            res.push(getVerb("lose	lost	lost	gubic, traciæ"));
            res.push(getVerb("make	made	made	robiæ"));
            res.push(getVerb("mean	mean	meant	znaczyæ"));
            res.push(getVerb("meet	met	met	spotykaæ"));
            res.push(getVerb("must/have to	had to	had to	musieæ"));
            res.push(getVerb("pay	paid	paid	p³aciæ"));
            res.push(getVerb("put	put	put	k³aœæ"));
            res.push(getVerb("read	read	read	czytaæ"));
            res.push(getVerb("ride	rode	ridden	jeŸdziæ (na czymœ)"));
            res.push(getVerb("rise	rose	risen	rosn¹æ"));
            res.push(getVerb("ring	rang	rung	dzwoniæ"));
            res.push(getVerb("run	ran	run	biec"));
            res.push(getVerb("say	said	said	mówiæ"));
            res.push(getVerb("see	saw	seen	widzieæ"));
            res.push(getVerb("sell	sold	sold	sprzedawaæ"));
            res.push(getVerb("send	sent	sent	wysy³aæ"));
            res.push(getVerb("set	set	set	umieszczaæ, postawiæ"));
            res.push(getVerb("shine	shone	shone	zaœwieciæ (czymœ)"));
            res.push(getVerb("show	showed	shown	pokazywaæ"));
            res.push(getVerb("shut	shut	shut	zamykaæ, zatrzaskiwaæ"));
            res.push(getVerb("sing	sang	sung	œpiewaæ"));
            res.push(getVerb("sink	sank	sunk	ton¹æ"));
            res.push(getVerb("sit	sat	sat	siedzieæ"));
            res.push(getVerb("sleep	slept	slept	spaæ"));
            res.push(getVerb("smell	smelled	smelt	w¹chaæ, pachnieæ"));
            res.push(getVerb("speak	spoke	spoken	mówiæ"));
            res.push(getVerb("spend	spent	spent	spêdzaæ"));
            res.push(getVerb("spill	spilt	spilled	rozlewaæ"));
            res.push(getVerb("stand	stood	stood	staæ"));
            res.push(getVerb("steal	stole	stolen	kraœæ"));
            res.push(getVerb("swim	swam	swum	p³ywaæ"));
            res.push(getVerb("take	took	taken	braæ"));
            res.push(getVerb("teach	taught	taught	uczyæ"));
            res.push(getVerb("tear	torn	torn	drzeæ, rozrywaæ"));
            res.push(getVerb("tell	told	told	mówiæ"));
            res.push(getVerb("think	thought	thought	mysleæ"));
            res.push(getVerb("throw	threw	thrown	wyrzucaæ"));
            res.push(getVerb("understand	understood	understood	rozumieæ"));
            res.push(getVerb("wake	woke	woken	budziæ siê"));
            res.push(getVerb("wear	wore	wore	byæ ubranym w coœ"));
            res.push(getVerb("win	won	won	wygrywaæ"));
            res.push(getVerb("write	wrote	written	pisaæ"));

            return res;
        }

        function getRandomList(count) {
            if (allVerbList == null) {
                allVerbList = getAllVerbs();
            }

            var tempList = allVerbList.slice(0, allVerbList.length - 1);
            var resList = new Array();

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
        Verbs.getRandomList = getRandomList;
    })(ivt.Verbs || (ivt.Verbs = {}));
    var Verbs = ivt.Verbs;

    ivt.currentVerb = 0;
    var verbsToLearn = 10;
    ivt.verbsIncorrect;
    ivt.verbsCorrect;

    var selectedVerbList;
    var learnVerbList;

    function updateProgressView() {
        jQuery("#verbNumberLabel").text(ivt.currentVerb + 1);
        jQuery("#verbCountLabel").text(learnVerbList.length);
        jQuery("#verbToLearnLabel").text(verbsToLearn);
        jQuery("#verbRepetitionsLabel").text((ivt.verbsIncorrect * 2));

        var verb = learnVerbList[ivt.currentVerb];
        var vInfos = new Array();
        if (verb.ValidAnswers > 0) {
            vInfos.push('<span style="color:DarkGreen;">Valid answers: ' + verb.ValidAnswers + '</span>');
        }
        if (verb.Errors > 0) {
            vInfos.push('<span style="color:maroon;">Mistakes: ' + verb.Errors + '</span>');
        }
        var repLeft = verb.Repetitions - verb.ValidAnswers;
        if (repLeft > 0) {
            vInfos.push('<span style="color:black;">Repetitions: ' + repLeft + '</span>');
        }

        if (vInfos.length > 0) {
            jQuery("#verbInfo").html(vInfos.join(" | "));
        } else {
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

    function setVerb(verb) {
        jQuery("#verbLabel").text(verb.Form1);
        jQuery("#verbNativeLabel").text(verb.Native);
    }

    function startNewLesson() {
        verbsToLearn = parseInt(jQuery("#verbsToLearnBox").val());
        if (isNaN(verbsToLearn)) {
            alert("Ivalid value: 'Count of verbs to learn'");
            return;
        }
        selectedVerbList = Verbs.getRandomList(verbsToLearn);
        learnVerbList = selectedVerbList.slice(0, verbsToLearn);

        //Summary.Clear();
        ivt.currentVerb = 0;
        ivt.verbsIncorrect = 0;
        ivt.verbsCorrect = 0;
        clearAnswers();
        setVerb(learnVerbList[ivt.currentVerb]);
        updateProgressView();
    }
    ivt.startNewLesson = startNewLesson;

    function imputIsValid(validVerb, formNo) {
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
        } else {
            boxElem.closest('div').css("background-color", "");
            boxElem.attr("placeholder", "");
            lblElem.html("&nbsp;");
        }

        return res;
    }

    var invalidInputSelected = false;
    function imputsAreValid(verb) {
        invalidInputSelected = false;

        var v1 = imputIsValid(verb.Form1, 1);
        var v2 = imputIsValid(verb.Form2, 2);
        var v3 = imputIsValid(verb.Form3, 3);
        return v1 && v2 && v3;
    }

    function goToNextVerb() {
        var verb = learnVerbList[ivt.currentVerb];
        verb.Answers += 1;

        var valid = imputsAreValid(verb);
        if (valid) {
            verb.ValidAnswers += 1;
            ivt.verbsCorrect++;
            clearAnswers();
            ivt.currentVerb++;
            if (ivt.currentVerb > learnVerbList.length - 1)
                jQuery.mobile.changePage("#results", { transition: "slide", changeHash: false }); else {
                setVerb(learnVerbList[ivt.currentVerb]);
                updateProgressView();
            }
            jQuery("#verbForm1Box").select();
            jQuery("#verbForm1Box").focus();
        } else {
            ivt.verbsIncorrect++;
            var pos = ivt.currentVerb + 5;
            if (pos > learnVerbList.length)
                pos = learnVerbList.length;
            var cv = learnVerbList[ivt.currentVerb];
            learnVerbList.splice(pos, 0, cv);
            learnVerbList.push(cv);

            verb.Repetitions += 2;
            verb.Errors += 1;
            updateProgressView();
        }
    }
    ivt.goToNextVerb = goToNextVerb;

    function updateVerbsTable() {
        var verbsTable = document.getElementById('verbsTable');
        while (verbsTable.hasChildNodes()) {
            verbsTable.removeChild(verbsTable.lastChild);
        }

        for (var i = 0; i < selectedVerbList.length; i++) {
            var verb = selectedVerbList[i];
            var div = document.createElement('div');
            if (verb == learnVerbList[ivt.currentVerb])
                div.style.color = "black"; else
                div.style.color = "gray";

            //div.appendChild(getSpan(verb.Form1 + " - "));
            //div.appendChild(getSpan("correct: " + verb.ValidAnswers));
            //div.appendChild(getSpan(", wrong: " + verb.Errors));
            //var repLeft = verb.Repetitions - verb.ValidAnswers + 1
            //     div.appendChild(getSpan(", repetitions: " + repLeft));
            verbsTable.appendChild(div);
        }
    }

    function getResultsTableRow(no, verb) {
        return "<tr>" + "<th>" + no + "</th>" + "<td><strong>" + verb.Form1 + "</strong></td>" + "<td>" + verb.Answers + "</td>" + "<td>" + verb.ValidAnswers + "</td>" + "<td>" + verb.Errors + "</td>" + "<td>" + verb.Repetitions + "</td>" + "</tr> \r\n";
    }

    function loadTestResults() {
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
    ivt.loadTestResults = loadTestResults;
})(ivt || (ivt = {}));

jQuery(document).ready(function () {
    jQuery.mobile.changePage.defaults.changeHash = false;
});

jQuery(document).on("pagebeforeshow", "#lesson", function (event) {
    ivt.startNewLesson();
});

jQuery(document).on("pagebeforeshow", "#results", function (event) {
    ivt.loadTestResults();
});
//@ sourceMappingURL=ivt.js.map
