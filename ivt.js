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

            res.push(getVerb("be/am/is/are	was/were	been	by�"));
            res.push(getVerb("become	became	become	stawa� si�"));
            res.push(getVerb("begin	began	begun	zaczyna�"));
            res.push(getVerb("blow	blew	blown	wia�"));
            res.push(getVerb("break	broke	broken	�ama�"));
            res.push(getVerb("bring	brought	brought	przynosi�"));
            res.push(getVerb("build	built	built	budowa�"));
            res.push(getVerb("burn	burned	burnt	spali�"));
            res.push(getVerb("burst	burst	burst	wybucha�, p�ka�"));
            res.push(getVerb("buy	bought	bought	kupowa�"));
            res.push(getVerb("can	could	been able to	umie�, m�c, potrafi�"));
            res.push(getVerb("catch	caught	caught	chwyta�, �apa�"));
            res.push(getVerb("choose	chose	chosen	wybiera�"));
            res.push(getVerb("come	came	come	przybywa�"));
            res.push(getVerb("cost	cost	cost	kosztowa�"));
            res.push(getVerb("cut	cut	cut	ci��"));
            res.push(getVerb("dig	dug	dug	wykopywa�, kopa�"));
            res.push(getVerb("do	did	done	robi�"));
            res.push(getVerb("draw	drew	drawn	narysowa�, naszkicowa"));
            res.push(getVerb("dream	dreamt	dreamed	�ni�"));
            res.push(getVerb("drink	drank	drunk	pi�"));
            res.push(getVerb("drive	drove	driven	kierowa�"));
            res.push(getVerb("eat	ate	eaten	je��"));
            res.push(getVerb("fall	fell	fallen	upada�"));
            res.push(getVerb("feed	fed	fed	�ywi�, karmi�"));
            res.push(getVerb("feel	felt	felt	czu�"));
            res.push(getVerb("fight	fought	fought	walczy�"));
            res.push(getVerb("find	found	found	znajdowa�"));
            res.push(getVerb("fly	flew	flown	lata�"));
            res.push(getVerb("forget	forgot	forgotten	zapomina�"));
            res.push(getVerb("forgive	forgave	forgiven	wybacza�"));
            res.push(getVerb("get	got	got	dostawa�"));
            res.push(getVerb("give	gave	given	dawa�"));
            res.push(getVerb("go	went	gone	i��, jecha�"));
            res.push(getVerb("grow	grew	grown	rosn��"));
            res.push(getVerb("hang	hung	hung	wiesza� si�, kogo�/co�"));
            res.push(getVerb("have	had	had	mie�"));
            res.push(getVerb("hear	heard	heard	s�ysze�"));
            res.push(getVerb("hide	hid	hid	ukrywa� si�"));
            res.push(getVerb("hit	hit	hit	uderza�"));
            res.push(getVerb("hold	held	held	trzyma�"));
            res.push(getVerb("hurt	hurt	hurt	rani�"));
            res.push(getVerb("keep	kept	kept	trzyma�"));
            res.push(getVerb("know	knew	known	zna�, wiedzie�"));
            res.push(getVerb("lead	led	led	prowadzi�"));
            res.push(getVerb("learn	learnt	learnt	uczyc si�"));
            res.push(getVerb("leave	left	left	opuszcza�, wyje�d�a�"));
            res.push(getVerb("lend	lent	lent	po�ycza� komu�"));
            res.push(getVerb("let	let	let	pozwala�"));
            res.push(getVerb("lie	lay	lain	le�e�"));
            res.push(getVerb("light	lit	lighted	zapala�, podpala�"));
            res.push(getVerb("lose	lost	lost	gubic, traci�"));
            res.push(getVerb("make	made	made	robi�"));
            res.push(getVerb("mean	mean	meant	znaczy�"));
            res.push(getVerb("meet	met	met	spotyka�"));
            res.push(getVerb("must/have to	had to	had to	musie�"));
            res.push(getVerb("pay	paid	paid	p�aci�"));
            res.push(getVerb("put	put	put	k�a��"));
            res.push(getVerb("read	read	read	czyta�"));
            res.push(getVerb("ride	rode	ridden	je�dzi� (na czym�)"));
            res.push(getVerb("rise	rose	risen	rosn��"));
            res.push(getVerb("ring	rang	rung	dzwoni�"));
            res.push(getVerb("run	ran	run	biec"));
            res.push(getVerb("say	said	said	m�wi�"));
            res.push(getVerb("see	saw	seen	widzie�"));
            res.push(getVerb("sell	sold	sold	sprzedawa�"));
            res.push(getVerb("send	sent	sent	wysy�a�"));
            res.push(getVerb("set	set	set	umieszcza�, postawi�"));
            res.push(getVerb("shine	shone	shone	za�wieci� (czym�)"));
            res.push(getVerb("show	showed	shown	pokazywa�"));
            res.push(getVerb("shut	shut	shut	zamyka�, zatrzaskiwa�"));
            res.push(getVerb("sing	sang	sung	�piewa�"));
            res.push(getVerb("sink	sank	sunk	ton��"));
            res.push(getVerb("sit	sat	sat	siedzie�"));
            res.push(getVerb("sleep	slept	slept	spa�"));
            res.push(getVerb("smell	smelled	smelt	w�cha�, pachnie�"));
            res.push(getVerb("speak	spoke	spoken	m�wi�"));
            res.push(getVerb("spend	spent	spent	sp�dza�"));
            res.push(getVerb("spill	spilt	spilled	rozlewa�"));
            res.push(getVerb("stand	stood	stood	sta�"));
            res.push(getVerb("steal	stole	stolen	kra��"));
            res.push(getVerb("swim	swam	swum	p�ywa�"));
            res.push(getVerb("take	took	taken	bra�"));
            res.push(getVerb("teach	taught	taught	uczy�"));
            res.push(getVerb("tear	torn	torn	drze�, rozrywa�"));
            res.push(getVerb("tell	told	told	m�wi�"));
            res.push(getVerb("think	thought	thought	mysle�"));
            res.push(getVerb("throw	threw	thrown	wyrzuca�"));
            res.push(getVerb("understand	understood	understood	rozumie�"));
            res.push(getVerb("wake	woke	woken	budzi� si�"));
            res.push(getVerb("wear	wore	wore	by� ubranym w co�"));
            res.push(getVerb("win	won	won	wygrywa�"));
            res.push(getVerb("write	wrote	written	pisa�"));

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
