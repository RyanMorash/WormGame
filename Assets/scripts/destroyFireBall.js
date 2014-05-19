#pragma strict
var lifeTime = 1.0;

function Awake () {
	Destroy (gameObject, lifeTime);
}

function OnTriggerEnter(hit : Collider) {
	if (hit.gameObject.tag == "Player") {
		Destroy(gameObject);
	}
}	
