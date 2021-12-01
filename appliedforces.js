(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"appliedforces_atlas_1", frames: [[484,65,403,63],[0,0,1010,63],[0,65,482,63]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_87 = function() {
	this.initialize(ss["appliedforces_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["appliedforces_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["appliedforces_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(img.CachedBmp_84);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2558,90);


(lib.CachedBmp_83 = function() {
	this.initialize(img.CachedBmp_83);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2194,8);


(lib.StartBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.txt = new cjs.Text("start/stop", "10px 'Avenir Next'");
	this.txt.name = "txt";
	this.txt.textAlign = "right";
	this.txt.lineHeight = 16;
	this.txt.lineWidth = 62;
	this.txt.parent = this;
	this.txt.setTransform(65.55,-4.65);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(4));

	// skins
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0)").ss(0.1,2,1).p("AAAAAIAAAA");
	this.shape.setTransform(49.75,14.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AA6B4IgBAAIk7AAIAAjvIGMAAQAyAAAkAjQAiAkABAwQgBAxgiAjQgkAkgyAAg");
	this.shape_1.setTransform(43.95,2.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,-9.7,68.2,25);


(lib.shw = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#666666"],[0,1],-11.3,222.8,-11.3,-615.9).s().p("EgcFAgeMAAAhA7MA4LAAAMAAABA7g");
	this.shape.setTransform(179.775,207.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359.6,415.7);


(lib.momentframe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(60,2,0,3).p("A8y6eMA5lAAAMAAAA09Mg5lAAAg");
	this.shape.setTransform(-177.25,-38.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(60,2,0,3).p("A8w6bQOuAKOugKQOEgLODALQgKMtALMpQAINzgINzMg5XAAAQgEtygJtxQgMstAMssg");
	this.shape_1.setTransform(-177.35,-38.748);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(60,2,0,3).p("A8v6YQOuATOugTQODgWOEAWQgUMrAVMrQAQNygQN0Mg5YAAAQAHtzgTtxQgZssAZssg");
	this.shape_2.setTransform(-177.4625,-39.0104);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(60,2,0,3).p("A8u6WQOuAeOtgeQOEggOEAgQgfMqAgMsQAYNygYN0Mg5YAABQAQt0gctxQglssAlssg");
	this.shape_3.setTransform(-177.5625,-39.2833);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(60,2,0,3).p("A8t6TQOuAnOtgnQOEgrODArQgoMoAqMtQAgNzggNzMg5ZAABQAbt0gmtxQgxssAxsrg");
	this.shape_4.setTransform(-177.6625,-39.5437);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(60,2,0,3).p("A8s6QQOuAxOtgxQOEg2ODA1QgyMnA0MuQAoNzgoNzMg5aAACQAlt1gvtxQg9srA9srg");
	this.shape_5.setTransform(-177.7562,-39.8228);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(60,2,0,3).p("A8r6OQOuA7Otg7QODhAOEBAQg9MlA/MvQAwNzgwN0Mg5bAACQAwt2g5txQhJsrBJsrg");
	this.shape_6.setTransform(-177.8562,-40.0852);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#666666").ss(60,2,0,3).p("A8q6LQOuBFOthFQODhLOEBLQhHMjBJMxQA4Nzg4NzMg5bAADQA5t3hCtwQhVsrBVsrg");
	this.shape_7.setTransform(-177.9562,-40.3579);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(60,2,0,3).p("A8p6IQOuBPOthPQODhXODBWQhRMiBUMyQBANzhANzMg5cAADQBEt3hMtxQhisqBisqg");
	this.shape_8.setTransform(-178.0687,-40.6306);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(60,2,0,3).p("A8o6GQOuBZOthZQODhhODBhQhbMgBeMzQBINzhINzMg5dAAEQBOt4hVtxQhusqBusqg");
	this.shape_9.setTransform(-178.1687,-40.8907);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(60,2,0,3).p("A8n6DQOuBjOthjQODhsODBsQhlMeBoM1QBQNzhQNzMg5eAAEQBYt5hetwQh6sqB6sqg");
	this.shape_10.setTransform(-178.2687,-41.1655);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#666666").ss(60,2,0,3).p("A8m6AQOuBsOthsQOCh3ODB2QhvMdBzM2QBYNzhYNzMg5eAAEQBit5hotwQiGsqCGspg");
	this.shape_11.setTransform(-178.3687,-41.4255);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#666666").ss(60,2,0,3).p("A8l5+QOuB3Osh3QODiBODCBQh5MbB9M3QBgNzhgNzMg5fAAFQBst6hxtxQiSspCSspg");
	this.shape_12.setTransform(-178.4812,-41.698);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#666666").ss(60,2,0,3).p("A8k57QOuCBOsiBQODiMODCMQiEMZCIM4QBoNzhoN0Mg5gAAFQB3t7h7twQiespCespg");
	this.shape_13.setTransform(-178.5812,-41.9705);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#666666").ss(60,2,0,3).p("A8j54QOuCKOsiKQODiXOCCWQiNMYCSM5QBwNzhwN0Mg5hAAFQCBt7iEtwQiqspCqsog");
	this.shape_14.setTransform(-178.6812,-42.2327);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#666666").ss(60,2,0,3).p("A8i51QOtCUOtiUQODiiOCChQiYMWCdM7QB5Nzh4N0Mg5iAAFQCLt8iOtwQi3soC3sog");
	this.shape_15.setTransform(-178.7749,-42.5114);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#666666").ss(60,2,0,3).p("A8h5zQOtCeOtieQOCisODCrQiiMVCnM8QCBNziAN0Mg5jAAGQCVt9iXtwQjDsoDDsog");
	this.shape_16.setTransform(-178.875,-42.7711);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#666666").ss(60,2,0,3).p("A8g5wQOtCoOtioQOCi4OCC3QirMTCxM9QCJNziIN0Mg5kAAGQCgt9ihtwQjPsoDPsng");
	this.shape_17.setTransform(-178.9749,-43.0434);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#666666").ss(60,2,0,3).p("A8f5tQOtCxOtixQOCjCOCDBQi2MRC8M+QCRN0iQN0Mg5lAAGQCqt+iqtwQjbsnDbsng");
	this.shape_18.setTransform(-179.0875,-43.3055);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#666666").ss(60,2,0,3).p("A8e5qQOtC7Oti7QOFjOOFDOQjGMODGNAQCZN3iZN3Mg5kAAAQC1t3i1t3QjnsnDnsng");
	this.shape_19.setTransform(-179.1875,-43.6125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#666666").ss(60,2,0,3).p("A8f5tQOtCyOtiyQOCjDOCDCQi2MRC8M+QCRN0iQN0Mg5lAAGQCrt+irtwQjcsnDcsng");
	this.shape_20.setTransform(-179.0875,-43.318);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#666666").ss(60,2,0,3).p("A8g5wQOtCpOtipQOCi4OCC3QisMTCyM9QCJN0iINzMg5kAAHQCht9iitxQjQsnDQsog");
	this.shape_21.setTransform(-179,-43.0684);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#666666").ss(60,2,0,3).p("A8h5yQOtCfOtifQOCivODCuQikMUCpM8QCCNziBN0Mg5jAAGQCXt8iZtxQjFsnDFsog");
	this.shape_22.setTransform(-178.8999,-42.8211);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#666666").ss(60,2,0,3).p("A8i51QOtCWOtiWQODikOCCjQiaMWCfM7QB6Nzh5N0Mg5iAAGQCNt8iQtwQi5spC5sog");
	this.shape_23.setTransform(-178.7999,-42.5613);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#666666").ss(60,2,0,3).p("A8j54QOuCNOsiNQODiZOCCZQiQMXCVM6QBzNzhyN0Mg5iAAFQCEt8iHtwQitsoCtspg");
	this.shape_24.setTransform(-178.6875,-42.2952);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#666666").ss(60,2,0,3).p("A8k56QOuCDOtiDQOCiQODCPQiGMZCKM4QBrN0hqNzMg5hAAFQB6t6h+txQihsoChspg");
	this.shape_25.setTransform(-178.6062,-42.0454);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#666666").ss(60,2,0,3).p("A8l59QOuB6Oth6QODiFOCCFQh8MaCAM3QBkN0hjNzMg5gAAFQBwt6h1txQiWspCWspg");
	this.shape_26.setTransform(-178.5062,-41.7855);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#666666").ss(60,2,0,3).p("A8m5/QOuBwOthwQODh7ODB6Qh0McB3M2QBcNzhbN0Mg5fAAEQBmt5hstxQiKspCKspg");
	this.shape_27.setTransform(-178.4062,-41.538);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#666666").ss(60,2,0,3).p("A8n6CQOuBnOthnQODhxODBxQhqMdBtM1QBUNzhTN0Mg5eAAEQBct5hjtxQh/spB/sqg");
	this.shape_28.setTransform(-178.3187,-41.2882);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#666666").ss(60,2,0,3).p("A8o6EQOuBeOtheQODhnODBmQhgMgBjMzQBNNzhMN0Mg5eAADQBTt4hatwQhzsqBzsqg");
	this.shape_29.setTransform(-178.2187,-41.0281);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#666666").ss(60,2,0,3).p("A8p6HQOuBVOthVQODhcOEBcQhXMhBZMyQBFNzhEN0Mg5dAADQBJt4hRtwQhosqBosrg");
	this.shape_30.setTransform(-178.1187,-40.768);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#666666").ss(60,2,0,3).p("A8q6JQOuBLOthLQOEhSODBRQhNMjBPMxQA9Nzg8NzMg5cAADQA/t3hItwQhcsrBcsqg");
	this.shape_31.setTransform(-178.0312,-40.5181);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#666666").ss(60,2,0,3).p("A8r6MQOuBCOuhCQODhIODBIQhDMkBFMwQA2Nzg1NzMg5cAADQA2t3g/twQhRsrBRsrg");
	this.shape_32.setTransform(-177.9312,-40.2704);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#666666").ss(60,2,0,3).p("A8s6OQOuA4Oug4QODg+ODA9Qg5MmA7MvQAuNzgtNzMg5bAACQAst2g2twQhFsrBFsrg");
	this.shape_33.setTransform(-177.8312,-40.0102);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#666666").ss(60,2,0,3).p("A8t6RQOvAvOtgvQODgzOEAzQgwMnAxMuQAnNygmN0Mg5aAABQAit1gttxQg5srA5srg");
	this.shape_34.setTransform(-177.7187,-39.7436);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#666666").ss(60,2,0,3).p("A8u6UQOvAmOtgmQODgpOEApQgmMpAnMsQAfNzgfNzMg5ZAACQAZt1gktxQgusrAussg");
	this.shape_35.setTransform(-177.6375,-39.4937);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#666666").ss(60,2,0,3).p("A8v6WQOvAcOtgcQOEgfODAfQgcMqAdMrQAXNzgXNzMg5YAABQAPt0gbtwQgissAissg");
	this.shape_36.setTransform(-177.5375,-39.2333);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#666666").ss(60,2,0,3).p("A8w6ZQOvATOtgTQOEgUOEAUQgUMsAUMqQAQNzgQNzMg5XAABQAFt0gStwQgXssAXstg");
	this.shape_37.setTransform(-177.4375,-38.9854);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#666666").ss(60,2,0,3).p("A8x6bQOvAJOtgJQOFgLODALQgJMtAKMpQAHNzgHNzMg5XAAAQgFtygJtxQgLstALssg");
	this.shape_38.setTransform(-177.35,-38.7355);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#666666").ss(60,2,0,3).p("A8z6bQOHgLOHALQOqAJOsgJQALMxgLMsQgJNvAJNvMg5fAABQgNt0AItyQAKssgKsqg");
	this.shape_39.setTransform(-177.2997,-38.7335);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#666666").ss(60,2,0,3).p("A806ZQOHgUOGAUQOrATOrgTQAYMxgXMsQgSNvARNvMg5eAACQgUt0APtzQAUstgUspg");
	this.shape_40.setTransform(-177.3981,-38.9795);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#666666").ss(60,2,0,3).p("A816WQOHgfOGAfQOrAcOrgcQAkMwgjMsQgbNuAaNwMg5eAACQgct0AXtzQAesugesng");
	this.shape_41.setTransform(-177.4948,-39.2401);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#666666").ss(60,2,0,3).p("A826UQOHgpOGApQOrAmOrgmQAvMwguMrQgkNvAjNvMg5eAAEQgkt1AftzQAosvgosmg");
	this.shape_42.setTransform(-177.5985,-39.4863);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#666666").ss(60,2,0,3).p("A836RQOHg0OGA0QOrAvOrgvQA7Mvg6MrQgtNvAsNvMg5eAAEQgrt1AmtzQAyswgyskg");
	this.shape_43.setTransform(-177.6842,-39.745);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#666666").ss(60,2,0,3).p("A846PQOGg9OHA9QOqA4Osg3QBGMuhFMrQg2NuA1NvMg5fAAGQgyt2AutzQA7sxg7sjg");
	this.shape_44.setTransform(-177.7956,-39.9913);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#666666").ss(60,2,0,3).p("A846MQOGhIOGBIQOrBCOrhBQBSMthQMrQg/NuA9NvMg5fAAHQg5t2A2tzQBFsyhFsig");
	this.shape_45.setTransform(-177.9012,-40.2501);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#666666").ss(60,2,0,3).p("A856KQOGhSOGBSQOrBLOrhKQBeMthcMqQhINuBGNwMg5fAAHQhBt2A+t0QBPszhPsgg");
	this.shape_46.setTransform(-178.0011,-40.4985);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#666666").ss(60,2,0,3).p("A866HQOGhcOGBcQOqBUOshTQBqMshoMqQhRNvBPNvMg5fAAIQhIt3BFtzQBZs0hZsfg");
	this.shape_47.setTransform(-178.1071,-40.7574);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#666666").ss(60,2,0,3).p("A876EQOGhnOGBnQOqBdOshdQB1MshzMqQhaNuBYNvMg5fAAJQhQt2BNt0QBjs1hjsdg");
	this.shape_48.setTransform(-178.213,-41.0039);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#666666").ss(60,2,0,3).p("A886CQOGhxOGBxQOqBnOshmQCBMrh/MqQhjNuBhNvMg5gAAKQhWt3BUt0QBts2htscg");
	this.shape_49.setTransform(-178.319,-41.263);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#666666").ss(60,2,0,3).p("A895/QOGh8OFB8QOrBwOrhwQCNMriKMpQhsNvBpNuMg5fAALQhet3Bct0QB3s3h3sag");
	this.shape_50.setTransform(-178.4251,-41.5221);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#666666").ss(60,2,0,3).p("A8+59QOGiFOFCFQOrB6Orh5QCZMqiWMpQh1NuByNvMg5fAAMQhmt4Bkt0QCBs4iBsZg");
	this.shape_51.setTransform(-178.5251,-41.7706);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#666666").ss(60,2,0,3).p("A8/56QOGiQOFCQQOrCDOriDQClMqiiMpQh+NuB7NvMg5fAAMQhtt4Brt0QCLs5iLsXg");
	this.shape_52.setTransform(-178.6312,-42.0299);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#666666").ss(60,2,0,3).p("A9A54QOGiaOFCaQOrCNOriMQCwMpitMoQiHNvCENuMg5fAAOQh1t5Bzt0QCVs6iVsWg");
	this.shape_53.setTransform(-178.7185,-42.2766);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#666666").ss(60,2,0,3).p("A9B51QOFilOGClQOqCVOsiUQC8Moi5MoQiQNuCNNvMg5gAAOQh7t4B6t1QCes7iesUg");
	this.shape_54.setTransform(-178.8309,-42.536);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#666666").ss(60,2,0,3).p("A9C5zQOFiuOGCuQOqCfOsieQDHMojEMoQiYNuCVNuMg5gAAQQiDt5CCt0QCos8iosUg");
	this.shape_55.setTransform(-178.9371,-42.7828);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#666666").ss(60,2,0,3).p("A9D5wQOFi5OGC5QOqCoOsinQDTMnjQMnQihNuCeNvMg5gAAQQiLt5CKt0QCys9iysSg");
	this.shape_56.setTransform(-179.0371,-43.0441);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#666666").ss(60,2,0,3).p("A9E5uQOFjDOFDDQOrCyOrixQDgMnjcMnQiqNuCmNvMg5fAARQiSt6CRt0QC8s+i8sRg");
	this.shape_57.setTransform(-179.1433,-43.291);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#666666").ss(60,2,0,3).p("Acf5qQutC7uti7QuFjOuFDOQDGMOjGNAQiZN3CZN3MA5kAAAQi1t3C1t3QDnsnjnsng");
	this.shape_58.setTransform(-179.2125,-43.6125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.1,-248.2,447.8,418.6);


(lib.frame_floor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Au4JhIbG18ICqC7I7GV8g");
	this.shape.setTransform(-222.95,37.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AuxJrIa62NICpC7I63WKg");
	this.shape_1.setTransform(-223.675,37.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AurJzIat2dICqC7I6qWag");
	this.shape_2.setTransform(-224.375,36.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AulJ9Iah2uICqC8I6cWng");
	this.shape_3.setTransform(-225.075,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AueKGIaU2+ICpC7I6NW2g");
	this.shape_4.setTransform(-225.775,34.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AuYKPIaI3PICpC8I5/XFg");
	this.shape_5.setTransform(-226.5,33.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AuSKYIZ83fICpC8I5yXTg");
	this.shape_6.setTransform(-227.2,33.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AuLKhIZv3wICoC8I5iXig");
	this.shape_7.setTransform(-227.925,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AuFKqIZi4AICpC9I5VXwg");
	this.shape_8.setTransform(-228.6,31.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("At/KzIZW4QICpC8I5HX/g");
	this.shape_9.setTransform(-229.325,30.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("At4K8IZJ4hICoC9I44YOg");
	this.shape_10.setTransform(-230.025,29.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AtyLFIY94xICoC9I4qYcg");
	this.shape_11.setTransform(-230.75,28.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AtsLOIYx5CICoC9I4cYrg");
	this.shape_12.setTransform(-231.475,28.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AtmLXIYk5SICpC+I4PY5g");
	this.shape_13.setTransform(-232.15,27.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AtfLgIYY5iICnC+I3/ZHg");
	this.shape_14.setTransform(-232.875,26.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AtZLqIYL50ICoC+I3yZXg");
	this.shape_15.setTransform(-233.575,25.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AtSLzIX+6EICoC+I3kZlg");
	this.shape_16.setTransform(-234.3,24.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AtML8IXy6UICnC+I3VZzg");
	this.shape_17.setTransform(-235,23.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AtGMFIXm6kICnC+I3HaCg");
	this.shape_18.setTransform(-235.7,23.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AtAMOIXa61ICmC/I25aQg");
	this.shape_19.setTransform(-236.4,22.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("As5MXIXN7FICmC/I2qaeg");
	this.shape_20.setTransform(-237.125,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},39).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_6
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("Au4JhIbG18ICrC7I7HV8g");
	this.shape_21.setTransform(-52.375,-100.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Au9JYIbT1rICoC8I7RVrg");
	this.shape_22.setTransform(-53.025,-101);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AvDJRIbg1dICmC+I7dVbg");
	this.shape_23.setTransform(-53.65,-101.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AvIJIIbs1MIClC/I7oVKg");
	this.shape_24.setTransform(-54.25,-102.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AvOJAIb508ICkDBI70U4g");
	this.shape_25.setTransform(-54.9,-103.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AvTI3IcF0rICiDCI7/Ung");
	this.shape_26.setTransform(-55.525,-104.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AvYIvIcS0bICfDDI8KUWg");
	this.shape_27.setTransform(-56.175,-105.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AveInIcf0MICeDFI8WUFg");
	this.shape_28.setTransform(-56.825,-106.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AvjIeIcrz7ICcDGI8hT1g");
	this.shape_29.setTransform(-57.425,-106.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AvpIWIc5zrICaDII8tTjg");
	this.shape_30.setTransform(-58.05,-107.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AvuIOIdFzbICYDJI83TSg");
	this.shape_31.setTransform(-58.7,-108.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AvzIFIdRzKICXDKI9DTBg");
	this.shape_32.setTransform(-59.35,-109.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("Av5H9Idey7ICVDMI9OSxg");
	this.shape_33.setTransform(-59.975,-110.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("Av+H0IdqyqICTDNI9aSgg");
	this.shape_34.setTransform(-60.575,-111.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AwEHtId4ybICRDPI9lSOg");
	this.shape_35.setTransform(-61.225,-112.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AwJHkIeEyLICPDQI9xR+g");
	this.shape_36.setTransform(-61.85,-112.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AwOHbIeRx5ICNDRI98Rtg");
	this.shape_37.setTransform(-62.5,-113.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AwUHUIedxrICMDTI+HRcg");
	this.shape_38.setTransform(-63.15,-114.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AwaHLIerxaICKDUI+TRLg");
	this.shape_39.setTransform(-63.75,-115.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AwfHDIe3xKICIDWI+eQ6g");
	this.shape_40.setTransform(-64.375,-116.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AwkG7IfDw7ICGDXI+pQqg");
	this.shape_41.setTransform(-65.025,-117.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_21}]},39).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// Layer_7
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("Au3pgICqi7IbGV8IiqC7g");
	this.shape_42.setTransform(349.05,37.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AuxpoICqi7Ia5WOIisC5g");
	this.shape_43.setTransform(349.825,37.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AuppvICoi8IarWgIitC3g");
	this.shape_44.setTransform(350.6,36.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("Aujp3ICoi8IafWxIivC2g");
	this.shape_45.setTransform(351.375,35.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("Aucp/ICni8IaSXDIixCzg");
	this.shape_46.setTransform(352.175,34.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AuVqGICmi9IaFXVIiyCxg");
	this.shape_47.setTransform(352.925,33.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AuOqOICli9IZ4XmIi0Cxg");
	this.shape_48.setTransform(353.725,32.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AuHqVICki+IZrX4Ii1Cug");
	this.shape_49.setTransform(354.5,31.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AuAqcICji+IZeYJIi3Csg");
	this.shape_50.setTransform(355.25,30.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("At5qkICji+IZQYbIi5Cqg");
	this.shape_51.setTransform(356.05,30.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AtyqrICii/IZDYsIi6Cpg");
	this.shape_52.setTransform(356.825,29.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AtrqzIChi/IY2Y+Ii8Cng");
	this.shape_53.setTransform(357.625,28.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("Atkq7ICgi/IYpZQIi+Clg");
	this.shape_54.setTransform(358.375,27.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("AterCICgjAIYdZiIjACjg");
	this.shape_55.setTransform(359.15,26.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AtWrKICejAIYQZzIjCCig");
	this.shape_56.setTransform(359.95,25.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#999999").s().p("AtPrRICejBIYCaFIjDCgg");
	this.shape_57.setTransform(360.7,24.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#999999").s().p("AtIrYICcjCIX2aXIjFCeg");
	this.shape_58.setTransform(361.5,23.875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#999999").s().p("AtCrgICcjCIXpaoIjHCdg");
	this.shape_59.setTransform(362.275,22.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("As7rnICcjDIXaa6IjHCbg");
	this.shape_60.setTransform(363.05,22.125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#999999").s().p("As0rvICbjDIXObMIjKCZg");
	this.shape_61.setTransform(363.825,21.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("As6roICbjCIXaa6IjHCbg");
	this.shape_62.setTransform(363.075,22.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999999").s().p("AtBrhICcjCIXnaqIjHCcg");
	this.shape_63.setTransform(362.35,22.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#999999").s().p("AtHraICcjBIX0aZIjFCeg");
	this.shape_64.setTransform(361.6,23.75);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#999999").s().p("AtOrSICdjCIYAaJIjDCgg");
	this.shape_65.setTransform(360.875,24.575);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#999999").s().p("AtVrLICfjBIYMZ4IjCChg");
	this.shape_66.setTransform(360.125,25.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#999999").s().p("AtbrEICfjBIYYZnIjACjg");
	this.shape_67.setTransform(359.375,26.25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("Atiq9ICgjAIYlZWIi+Clg");
	this.shape_68.setTransform(358.65,27.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#999999").s().p("Atpq2IChi/IYxZFIi9Cmg");
	this.shape_69.setTransform(357.9,27.925);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999999").s().p("AtvqvIChi/IY+Y1Ii7Cog");
	this.shape_70.setTransform(357.175,28.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#999999").s().p("At1qoICii+IZKYjIi6Cqg");
	this.shape_71.setTransform(356.45,29.625);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#999999").s().p("At8qgICji/IZWYTIi4Csg");
	this.shape_72.setTransform(355.7,30.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#999999").s().p("AuDqZICki+IZjYCIi3Ctg");
	this.shape_73.setTransform(354.975,31.275);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#999999").s().p("AuJqSICki9IZvXxIi1Cug");
	this.shape_74.setTransform(354.225,32.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#999999").s().p("AuQqLICli9IZ8XgIizCxg");
	this.shape_75.setTransform(353.5,32.95);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#999999").s().p("AuWqEICli9IaIXRIiyCyg");
	this.shape_76.setTransform(352.75,33.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#999999").s().p("Audp9ICni8IaUW/IiwC0g");
	this.shape_77.setTransform(352,34.625);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#999999").s().p("Aukp2ICoi8IahWvIivC1g");
	this.shape_78.setTransform(351.275,35.45);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#999999").s().p("AuqpuICoi8IatWeIitC3g");
	this.shape_79.setTransform(350.525,36.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AuxpnICpi7Ia6WNIisC4g");
	this.shape_80.setTransform(349.8,37.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_42}]},1).wait(41));

	// Layer_3
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#999999").s().p("Au4pgICri7IbGV8IiqC7g");
	this.shape_81.setTransform(178.475,-100.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999999").s().p("Au9pWICoi9IbUVrIiqC8g");
	this.shape_82.setTransform(179.15,-101.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#999999").s().p("AvDpMICni+IbgVZIioC8g");
	this.shape_83.setTransform(179.8,-101.975);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#999999").s().p("AvJpCICljAIbuVJIioC8g");
	this.shape_84.setTransform(180.475,-102.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#999999").s().p("AvOo4ICijBIb8U3IioC8g");
	this.shape_85.setTransform(181.15,-103.825);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#999999").s().p("AvUovICgjCIcJUmIimC9g");
	this.shape_86.setTransform(181.8,-104.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#999999").s().p("AvaokICfjEIcWUUIilC9g");
	this.shape_87.setTransform(182.475,-105.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#999999").s().p("AvgobICdjFIckUDIilC+g");
	this.shape_88.setTransform(183.15,-106.575);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#999999").s().p("AvloRICajHIcxTyIijC/g");
	this.shape_89.setTransform(183.8,-107.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#999999").s().p("AvroHICZjJIc+TiIijC+g");
	this.shape_90.setTransform(184.475,-108.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#999999").s().p("Avwn9ICWjKIdMTQIiiC/g");
	this.shape_91.setTransform(185.15,-109.325);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#999999").s().p("Av2nzICUjMIdZS/IihDAg");
	this.shape_92.setTransform(185.825,-110.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#999999").s().p("Av8nqICTjMIdmStIigDAg");
	this.shape_93.setTransform(186.475,-111.15);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#999999").s().p("AwBngICQjOIdzScIifDBg");
	this.shape_94.setTransform(187.15,-112.075);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#999999").s().p("AwHnWICOjPIeBSKIifDBg");
	this.shape_95.setTransform(187.825,-112.975);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#999999").s().p("AwNnMICNjRIeOR6IieDBg");
	this.shape_96.setTransform(188.475,-113.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#999999").s().p("AwTnCICLjSIebRoIicDBg");
	this.shape_97.setTransform(189.15,-114.825);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#999999").s().p("AwYm4ICIjUIepRXIicDCg");
	this.shape_98.setTransform(189.825,-115.75);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#999999").s().p("AwemuICHjVIe2RFIibDCg");
	this.shape_99.setTransform(190.475,-116.65);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#999999").s().p("AwjmkICEjXIfDQ0IiaDDg");
	this.shape_100.setTransform(191.15,-117.575);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#999999").s().p("AwemtICGjWIe3RFIibDCg");
	this.shape_101.setTransform(190.525,-116.725);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#999999").s().p("AwZm3ICJjUIeqRVIicDCg");
	this.shape_102.setTransform(189.875,-115.825);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#999999").s().p("AwUnAICLjTIedRmIicDBg");
	this.shape_103.setTransform(189.25,-114.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#999999").s().p("AwOnKICMjRIeRR2IidDBg");
	this.shape_104.setTransform(188.6,-114.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#999999").s().p("AwInTICNjQIeESGIieDBg");
	this.shape_105.setTransform(188,-113.225);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#999999").s().p("AwDndICQjOId3SXIifDAg");
	this.shape_106.setTransform(187.35,-112.35);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#999999").s().p("Av+nmICSjNIdrSnIigDAg");
	this.shape_107.setTransform(186.725,-111.475);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#999999").s().p("Av4nwICTjLIdeS3IigDAg");
	this.shape_108.setTransform(186.075,-110.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#999999").s().p("Avzn5ICVjKIdSTIIihC/g");
	this.shape_109.setTransform(185.45,-109.725);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#999999").s().p("AvuoCICYjJIdFTYIijC/g");
	this.shape_110.setTransform(184.825,-108.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#999999").s().p("AvooMICZjHIc4TpIijC+g");
	this.shape_111.setTransform(184.175,-108);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#999999").s().p("AvjoVICcjGIcrT5IikC+g");
	this.shape_112.setTransform(183.55,-107.125);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#999999").s().p("AvdoeICdjFIcfUJIilC+g");
	this.shape_113.setTransform(182.9,-106.25);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#999999").s().p("AvYooICfjDIcSUaIilC9g");
	this.shape_114.setTransform(182.275,-105.375);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#999999").s().p("AvToxICijCIcFUqIinC9g");
	this.shape_115.setTransform(181.65,-104.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#999999").s().p("AvNo7ICijAIb5U7IinC8g");
	this.shape_116.setTransform(181.025,-103.65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#999999").s().p("AvIpEICli/IbsVLIioC8g");
	this.shape_117.setTransform(180.375,-102.75);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#999999").s().p("AvCpNICmi+IbgVbIipC8g");
	this.shape_118.setTransform(179.75,-101.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#999999").s().p("Au9pXICpi8IbSVrIipC8g");
	this.shape_119.setTransform(179.1,-101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81}]}).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_81}]},1).wait(41));

	// Layer_2
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1.1,1,1).p("EhGUAfOQgTAAgUABMAAAg+LIBNAAIG3gFIBMAAIAAAlMAAAAw3IAAJEIIeAAIEgAAIAADwIs+AAIAAgFIAAjrEg7AgdeQAEgHAFgGQANgMASAAQASAAAMAMQAHAGACAHQgCAHgHAGQgCADgDACQADACACACIABABQABAAAAABQAFAFACAGQAEAIAAAKQAAAJgEAIQgCAHgHAGQgCADgDACQADACACACIABABQABAAAAABQAFAFACAGQAEAIAAAKQAAAJgEAIQgCAHgHAGQgCADgDACQADACACACIABABQABAAAAABQAFAFACAGQAEAIAAAKQAAAJgEAIQgCAHgHAGQgCADgDACQADACACACQAHAGACAHQgCAHgHAGQgMANgSAAQgSAAgNgNQgFgGgEgHQgDgIAAgJQAAgKADgIQgDgIAAgJQAAgKADgIQgDgIAAgJQAAgKADgIQgDgIAAgJQAAgKADgIQAEgHAFgGQADgCADgCQgDgCgBgBIgCgCQgFgGgEgHQAEgHAFgGQADgCADgCQgDgCgDgDQgFgGgEgHQgDgIAAgJQAAgKADgIQgDgIAAgJQAAgSAMgNQAJgIALgDQAAAAAAAAQAFgBAGAAQASAAAMAMQAHAHADAJIgzAAIAAgbIAAAAQAAgNAAgOMB1hAAAIAAAZIAAACIgLAAQAFgCAGAAIAAAAQAHAAAFACIgMAAIAAAbIgpAAMh0FAAAQADAHAAAIQAAAJgEAIQAEAIAAAKQAAAJgEAIQgCAHgHAGQgCADgDACQADACACACQAHAGACAHQAEAIAAAKQAAAJgEAIQgCAHgHAGQgCADgDACQADACACACQAHAGACAHQAEAIAAAKQAAAJgEAIQgCAHgHAGQgCADgDACQADACACACQAHAGACAHQAEAIAAAKQAAAJgEAIQAEAIAAAKQAAAHgCAGQgDAKgIAHQgMANgSAAQgEAAgEgBQgNgCgKgKQgMgMAAgSQAAgKADgIQAEgHAFgGQADgCADgCQgCgCgCgBIgCgCQgFgGgEgHQAEgHAFgGQADgCADgCQgDgCgDgDQgFgGgEgHQAEgHAFgGQADgCADgCQAKgIAPAAQAOAAALAIQgLAIgOAAQgIAAgIgDIgFgCQgCgCgCgBQgCgCgCgBIgCgCQgFgGgEgHQAEgHAFgGQADgCADgCQAKgIAPAAQAOAAALAIQgLAIgOAAQgPAAgKgIQgDgCgDgDQgFgGgEgHQgDgIAAgJQAAgKADgIQgDgIAAgJQAAgKADgIQAEgHAFgGQADgCADgCQgDgCgDgDQgFgGgEgHgEg6jgeZIAAAAIjIgDEg5/gdMQgLAIgOAAQgPAAgKgIQAKgIAPAAQAOAAALAIgEg5/gcGQgLAIgOAAQgIAAgIgDIgFgCQgCgCgCgBQACgCACgBQADgCACAAQAIgDAIAAQAAAAABAAQABAAAAAAQAAAAABAAQABAAABAAQAMABAIAHgEg5/gcpQgLAIgOAAQgPAAgKgIQAKgIAPAAQAOAAALAIgEg6xgadQAKgIAPAAQAOAAALAIQgLAIgOAAQgPAAgKgIgEg6xgZ6QAKgIAPAAQAOAAALAIQgLAIgOAAQgIAAgIgDIgFgCQgCgCgCgBgEg6ggYtQABgBgBgBIABgbIAwAAMB0EAAAIAtAAIAAAdQgCAAgCAAQgSAAgNgMQgHgIgDgJQgCgHAAgHQAAgJADgIQADgHAGgGQADgDADgCQgCgBgCgCIgCgBQgGgGgDgHQADgHAGgGQADgDADgCQgDgCgDgCQgGgGgDgHQADgHAGgGQADgDADgCQgDgBgBgCIgCgBQgGgGgDgHQADgHAGgGQADgDADgCQgDgCgDgCQgGgGgDgHQADgHAGgGQADgDADgCQACgBACgCQADgBACgBQAHgDAJAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAABABQALABAJAGQADACACADIABAAQAAABABABQAFAFACAGQAEAIAAAJQAAAKgEAIQgDAHgGAGQgCACgDACQgLAIgOAAQgJAAgHgCIgFgDQgCgBgCgCQAKgIAPAAQAOAAALAIQADACACADIABAAQAAABABABQAFAFACAGQAEAIAAAJQAAAKgEAIQgDAHgGAGQgCACgDACQADACACADQAGAGADAHQgDAHgGAGQgMAMgSAAQgSAAgNgMQgGgGgDgHQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQADgHAGgGQADgDADgCQgDgCgDgCQgGgGgDgHQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgIACgGQADgJAHgHQAJgJALgCEg6ggYqQABgBgBgCAnn4UMgy4AAAQAAgLgBgLIjGgDACkxCIJxC9IjiqPImPAAIkxAAACkxCIkxAAIAAnSIlaAAACk4UIAAHSEBFvgfOIBNAAMAAAA+LQgTAAgTABIgTAAIgUgBgEA7KgeZQAKADAIAIQANAMAAASQAAAKgEAIQgDAHgGAGQgCACgDACQADACACADIABAAQAAABABABQAFAFACAGQAEAIAAAJQAAAKgEAIQAEAIAAAJQAAAKgEAIQgDAHgGAGQgCACgDACQgLAIgOAAQgPAAgKgIQAKgIAPAAQAOAAALAIQADACACADQAGAGADAHQAEAIAAAJQAAAKgEAIQgDAHgGAGQgCACgDACQADACACADQAGAGADAHQAEAIAAAJQAAAKgEAIQAEAIAAAJQAAASgNANQgLALgPABIAAABIAAAYMgyPAAAEA6lgdNQgDgCgDgCQgGgGgDgHQADgHAGgGQANgNASAAQASAAAMANQAGAGADAHQAEAIAAAJQAAAKgEAIQgDAHgGAGQgCACgDACQADACACADQAGAGADAHQgDAHgGAGQgCACgDACQgLAIgOAAQgJAAgHgCIgFgDQgCgBgCgCQgDgBgBgCIgCgBQgGgGgDgHQgDgIAAgKQAAgJADgIQADgHAGgGQADgDADgCQAKgIAPAAQAOAAALAIQgLAIgOAAQgPAAgKgIgEA7XgcqQgLAIgOAAQgPAAgKgIQAKgIAPAAQAOAAALAIgEA7XgZ7QgLAIgOAAQgJAAgHgCIgFgDQgCgBgCgCQAKgIAPAAQAOAAALAIgEA7XgaeQgLAIgOAAQgPAAgKgIQAKgIAPAAQAOAAALAIgEA9sgeXIAAgyIBMAAIG3gFEA9sgeXIiigCEA9lgYpIijgDAiNxCIo+CJIDkpbEA9sAe+Is+AAIAAjwIEbAAIIjAAgEA+cAfCIAcgBIAAABIgcAAIgKAAQgTAAgTAAIAAgEEA9sAbOIAAozMAAAgwyEA1JAbOIjdq0IMACBEA+4AfBIHLgDEg1NAbfIDirFIsACBEhGUAfOIAmAAIAAABgEg+kAfKIATAAQATAAATAAEg+kAfKIgTAAMAAAg+LEhFuAfOIHKgEEhFuge8MAAAA+KEA+4gfJMAAAA+K");
	this.shape_120.setTransform(62.65,-38.85);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#666666","#999999"],[0,1],-38.4,0,38.4,0).s().p("AiiFaIjdqzIL/CBIAAIyg");
	this.shape_121.setTransform(419,100.725);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#666666","#999999"],[0,1],-38.4,0,38.4,0).s().p("Al/FiIAApDIL/iAIjiLDg");
	this.shape_122.setTransform(-293.7125,101.575);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#666666","#999999"],[0,1],-31.2,0,31.3,0).s().p("Ak4CKIAAnRIGOAAIDjKOg");
	this.shape_123.setTransform(110.2625,-161.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#666666","#999999"],[0,1],-28.7,0,28.7,0).s().p("Ag7ktIFaAAIAAHRIo9CJg");
	this.shape_124.setTransform(19.75,-164.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#666666","#999999"],[0,1],-15.2,0,15.3,0).s().p("AiYDpIAAnRIExAAIAAHRg");
	this.shape_125.setTransform(63.725,-171.25);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#666666","#999999"],[0,1],-376.1,0,376.1,0).s().p("AIiAbImPAAIkxAAIlaAAMgy4AAAIAAgWIAAgDIAIABQARAAANgLQAIgIADgKMB0DAAAQADAKAHAHQANALASAAIAEAAIAAABIAAAYg");
	this.shape_126.setTransform(64.3,-197.25);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#666666","#999999"],[0,1],-376,0,376.1,0).s().p("Eg59AAbQgDgJgHgHQgMgLgSAAIgLAAIAAgaMB1hAAAIAAAZIgBAAIgLABQgLACgIAJQgHAHgDAJg");
	this.shape_127.setTransform(63.975,-233.425);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#666666","#999999"],[0,1],-371.5,0,371.6,0).s().p("Eg6BACaQACgGAAgHQAAgKgEgIQAEgHAAgKQAAgKgEgHQAEgIAAgKQAAgKgEgHQAEgJAAgJQAAgJgEgIQAEgJAAgJQAAgJgEgHQAEgJAAgJQAAgJgEgJQAEgIAAgJQAAgJgEgJQAEgHAAgKQAAgJgEgJQAEgIAAgJQAAgIgDgHMB0FAAAQgDAHAAAHQAAAKAEAIQgEAIAAAJQAAAKAEAIQgEAIAAAJQAAAKAEAIQgEAIAAAKQAAAJAEAIQgEAIAAAJQAAAJAEAIQgEAIAAAKQAAAJAEAIQgEAIAAAKQAAAJAEAIQgEAIAAAJQAAAKAEAIQgEAIAAAJQAAAIACAGg");
	this.shape_128.setTransform(64.475,-215.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#666666","#999999"],[0,1],-3.8,0,3.9,0).s().p("AgSfGIgTgBMAAAg+KIBLAAMAAAA+KIgmABg");
	this.shape_129.setTransform(512.775,-39.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#666666","#999999"],[0,1],-22.9,0,23,0).s().p("Ajk/CIG2gFMAAAA+KIATABInJAEg");
	this.shape_130.setTransform(487.975,-39.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#666666","#999999"],[0,1],-3.8,0,3.9,0).s().p("AAAfGIglAAIAAgFIAAjwIAAozMAAAgwxIAAgyIBLAAMAAAA+KIgcABg");
	this.shape_131.setTransform(461.225,-39.225);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#666666","#999999"],[0,1],-41.4,0,41.5,0).s().p("AmeB4IAAjvIEbAAIIiAAIAADvg");
	this.shape_132.setTransform(415.925,147.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#666666","#999999"],[0,1],-41.4,0,41.5,0).s().p("AmeB4IAAgFIAAjqIIdAAIEgAAIAADvg");
	this.shape_133.setTransform(-290.625,149);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#666666","#999999"],[0,1],-3.8,0,3.9,0).s().p("AgSfGIgTAAMAAAg+LIBLAAIAAAmMAAAAw2IAAJEIAADrIgmAAg");
	this.shape_134.setTransform(-335.925,-38.4625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#666666","#999999"],[0,1],-3.8,0,3.9,0).s().p("Agl/FIBLAAMAAAA+KIgmAAIglABg");
	this.shape_135.setTransform(-387.475,-37.975);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#666666","#999999"],[0,1],-22.9,0,23,0).s().p("Ajk/CIG2gFMAAAA+LIATAAInJAEg");
	this.shape_136.setTransform(-360.7375,-38.2625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]}).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-392.3,-239.7,909.9000000000001,401.7);


(lib.shearwall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.bf = new lib.shw("synched",0);
	this.bf.name = "bf";
	this.bf.setTransform(0,0.05,1,1,0,0,0,179.8,415.7);

	this.timeline.addTween(cjs.Tween.get(this.bf).to({skewX:5.9997},19).to({skewX:0},20).to({regX:179.7,skewX:-5.9979,x:-0.05},20).to({regX:179.8,skewX:0,x:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.2,-415.6,446.4,415.70000000000005);


(lib.momentframe_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.bf = new lib.momentframe();
	this.bf.name = "bf";
	this.bf.setTransform(285.6,251.5,0.6292,0.6292,0,0,0,62.6,161);

	this.timeline.addTween(cjs.Tween.get(this.bf).to({regY:161.1,skewX:3.9995},19).to({regY:161,skewX:0},20).to({regY:161.1,skewX:-3.9995,x:285.55},20).to({regY:161,skewX:0,x:285.6},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-11.1,318.09999999999997,270.5);


(lib.bracedFrame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.bf = new lib.frame_floor();
	this.bf.name = "bf";
	this.bf.setTransform(285.6,251.5,0.6292,0.6292,0,0,0,62.6,161);

	this.timeline.addTween(cjs.Tween.get(this.bf).to({regY:161.1,skewX:3.9995},19).to({regY:161,skewX:0},20).to({regY:161.1,skewX:-3.9995,x:285.55},20).to({regY:161,skewX:0,x:285.6},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-1,607.1,253.6);


// stage content:
(lib.appliedforces = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.momentframe.bf.stop();
		this.momentframe.stop();
		this.bracedframe.bf.stop();
		this.bracedframe.stop();
		this.shearwall.bf.stop();
		this.shearwall.stop();
		this.animCtrl_Btn.txt.text = "Play";
		this.animCtrl_Btn.addEventListener("click", animCtrl_Btnfunction.bind(this));
		
		
		
		
		//create function to start/stop animation and toggle button text
		function animCtrl_Btnfunction() {
			if (this.animCtrl_Btn.txt.text == "Play") {
				this.animCtrl_Btn.txt.text = "Pause";
				this.momentframe.bf.play();
				this.momentframe.play();
				this.bracedframe.bf.play();
				this.bracedframe.play();
				this.shearwall.bf.play();
				this.shearwall.play();
		
			} else {
				this.animCtrl_Btn.txt.text = "Play";
				this.momentframe.bf.stop();
				this.momentframe.stop();
				this.bracedframe.bf.stop();
				this.bracedframe.stop();
				this.shearwall.bf.stop();
				this.shearwall.stop();
		
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_84();
	this.instance.setTransform(26.2,21.5,0.5,0.5);

	this.animCtrl_Btn = new lib.StartBtn();
	this.animCtrl_Btn.name = "animCtrl_Btn";
	this.animCtrl_Btn.setTransform(1073.1,636.9,1.5051,1.5051,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.animCtrl_Btn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.instance_1 = new lib.CachedBmp_83();
	this.instance_1.setTransform(79.6,610.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.animCtrl_Btn},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_2 = new lib.CachedBmp_87();
	this.instance_2.setTransform(955.05,338.95,0.5,0.5);

	this.shearwall = new lib.shearwall();
	this.shearwall.name = "shearwall";
	this.shearwall.setTransform(955.45,588.05,0.5667,0.5669,0,0,0,-179.1,-43.5);

	this.instance_3 = new lib.CachedBmp_86();
	this.instance_3.setTransform(397.25,338.95,0.5,0.5);

	this.bracedframe = new lib.bracedFrame();
	this.bracedframe.name = "bracedframe";
	this.bracedframe.setTransform(645.3,497.45,0.9,0.9,0,0,0,285.6,125.8);

	this.instance_4 = new lib.CachedBmp_85();
	this.instance_4.setTransform(100.7,338.95,0.5,0.5);

	this.momentframe = new lib.momentframe_1();
	this.momentframe.name = "momentframe";
	this.momentframe.setTransform(357.15,501.8,0.9,0.9,0,0,0,285.7,125.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.momentframe},{t:this.instance_4},{t:this.bracedframe},{t:this.instance_3},{t:this.shearwall},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(666.2,381.5,639,273);
// library properties:
lib.properties = {
	id: '1F3AB136B6024ECBB9F348D673F4F391',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_84.png?1638367774139", id:"CachedBmp_84"},
		{src:"images/CachedBmp_83.png?1638367774139", id:"CachedBmp_83"},
		{src:"images/appliedforces_atlas_1.png?1638367774062", id:"appliedforces_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1F3AB136B6024ECBB9F348D673F4F391'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;