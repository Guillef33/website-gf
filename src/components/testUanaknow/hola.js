$(document).ready(function() {
	$('.middleBlock').hide();
});

$('#showHosting').click(function() {
  $('#firstBlock').show();
  $('#secondBlock').hide();
  $('#thirdBlock').hide();
});

$('#inStore').click(function() {
	$('#firstBlock').hide();
  $('#secondBlock').show();
  $('#thirdBlock').hide();
});

$('#onLine').click(function() {
  $('#firstBlock').hide();
  $('#secondBlock').hide();
  $('#thirdBlock').show();
});

{/* <div class="midSection sections">
  <div class="line"></div>
  <div class="sectionHeader">How to purchase</div>
  <div class="menuLine">
    <div id="subScription" class="menu" style="color:grey;">Subscription</div>
    <div id="inStore" class="menu" style="color: black;">current Issues</div>
    <div id="onLine" class="menu" style="color: black;">Digital Edition</div>
  </div>
  <div id="firstBlock" class="middleBlock">
    <div class="firstBlockContent leftblock">
      <h3>"primer"<br>"to blah"</h3>
    </div>

  </div>
  <div id="secondBlock" class="middleBlock" style="background:blue;">
    <div class="secondBlockContent leftblock">
      <h3>"seegundo "<br>"suscribe" </h3>
    </div>

  </div>
  <div id="thirdBlock" class="middleBlock" style="background:lightgreen;">
    <div class="secondBlockContent leftblock">
      <h3>"tercer"<br>"to blah"</h3>
    </div>
  </div>
</div> */}

  var Plani = document.getElementById("showPlanificacion");
  var Hosting = document.getElementById("showHosting");
  var Nube = document.getElementById("showHosting");

function showHosting() {
var Hosting = document.getElementById("showHosting");
  if (Hosting.style.display === "none") {
    Hosting.style.display = "block";
    Plani.style.display ="none";
    Nube.style.display = "none";
  } else {
    Hosting.style.display = "none";
  }
}

function showPlanificacion() {
  var Plani = document.getElementById("showPlanificacion");
  if (Plani.style.display === "none") {
    Plani.style.display = "block";
    Hosting.style.display = "none"
    Nube.style.display = "none";
  } else {
    Plani.style.display = "none";
  }
}

function showNube() {
  var Nube = document.getElementById("showNube");
  if (Nube.style.display === "none") {
    Nube.style.display = "block";
    Plani.style.display ="none";
    Hosting.style.display = "none"
  } else {
    Nube.style.display = "none";
  }
}

<script>
  const Plani = document.getElementById("showPlanificacion");
  const Hosting = document.getElementById("showHosting");
  const Nube = document.getElementById("showHosting");

function showHosting() {
var Hosting = document.getElementById("showHosting");
  if (Hosting.style.display === "none") {
    Hosting.style.display = "block";
    Plani.style.display ="none";
    Nube.style.display = "none";
  } else {
    Hosting.style.display = "none";
  }
}

function showPlanificacion() {
  var Plani = document.getElementById("showPlanificacion");
  if (Plani.style.display === "none") {
    Plani.style.display = "block";
    Hosting.style.display = "none"
    Nube.style.display = "none";
  } else {
    Plani.style.display = "none";
  }
}

function showNube() {
  var Nube = document.getElementById("showNube");
  if (Nube.style.display === "none") {
    Nube.style.display = "block";
    Plani.style.display ="none";
    Hosting.style.display = "none"
  } else {
    Nube.style.display = "none";
  }
}

</script>

