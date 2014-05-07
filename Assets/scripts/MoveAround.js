var speed = 3.0;
var rotateSpeed = 3.0;
var bulletPrefab:Transform;

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	
	// Rotate around Y Axis
	transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);
	
	//Move forward and backward
	var forward = transform.TransformDirection(Vector3.forward);
	var curSpeed = speed * Input.GetAxis ("Vertical");
	controller.SimpleMove(forward * curSpeed);
	
	if(Input.GetButtonDown("Fire")) {
		var bullet = Instantiate(bulletPrefab, GameObject.Find("spawnPoint").transform.position, Quaternion.identity);
		bullet.rigidbody.AddForce(transform.forward * 2000);
	}
}