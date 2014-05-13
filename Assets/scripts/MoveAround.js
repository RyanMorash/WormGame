//move speeds
var speed = 3.0;
var rotateSpeed = 3.0;

//shooting
var bulletPrefab:Transform;
var bulletSpeed = 2000;

//dying + respawn
var spawnPoint:Transform;
static var dead = false;

//getting hit
var tumbleSpeed = 800;
var decreaseTime = 100;
var decayTime = 10;
static var gotHit = false;
private var backup = [tumbleSpeed, decreaseTime, decayTime];

//function OnControllerColliderHit(hit : ControllerColliderHit) {
function OnTriggerEnter(hit : Collider) {
	if(hit.gameObject.tag == "fallout") {
		dead = true;
		healthControl.LIVES -= 1;
	}
	
	if (hit.gameObject.tag == "enemyProjectile") {
		gotHit = true;
		healthControl.HITS += 1;
		Destroy(hit.gameObject);
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
	
	if(gotHit) {
		if(tumbleSpeed < 1) {
			tumbleSpeed = backup[0];
			decreaseTime = backup[1];
			decayTime = backup[2];
			gotHit = false;
		}
		else {
			transform.Rotate(0, tumbleSpeed * Time.deltaTime, 0, Space.World);
			tumbleSpeed = tumbleSpeed - decayTime;
			decreaseTime += decayTime;
		}
	}
}