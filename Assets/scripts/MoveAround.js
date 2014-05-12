var speed = 3.0;
var rotateSpeed = 3.0;
var bulletPrefab:Transform;
var bulletSpeed = 2000;
var spawnPoint:Transform;
private var dead = false;

function OnControllerColliderHit(hit : ControllerColliderHit) {
	if(hit.gameObject.tag == "fallout") {
		dead = true;
	}
}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	
	// Rotate around Y Axis
	transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);
	
	//Move forward and backward
	var forward = transform.TransformDirection(Vector3.forward);
	var curSpeed = speed * Input.GetAxis ("Vertical");
	controller.SimpleMove(forward * curSpeed);
	
	if(Input.GetButtonDown("Fire")) {
		var bullet = Instantiate(bulletPrefab, transform.Find("spawnPoint").transform.position, Quaternion.identity);
		bullet.rigidbody.AddForce(transform.forward * bulletSpeed);
	}
}

function LateUpdate() {
	if(dead) {
		transform.position = spawnPoint.position;
		gameObject.Find("Main Camera").transform.position = spawnPoint.position;
		dead = false;
	}
}