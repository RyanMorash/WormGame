#pragma strict

var LookAtTarget:Transform;
var damp = 6.0;
var bulletPrefab:Transform;
var savedTime = 0;
var bulletSpeed = 2000;


function Start () {

}

function Update () {
	if(LookAtTarget) {
		var lookPos = LookAtTarget.position - transform.position;
		lookPos.y = 0;
		var rotate = Quaternion.LookRotation(lookPos);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * damp);
		var seconds : int = Time.time;
		var oddeven = (seconds % 2);
		if (oddeven) {
			Shoot(seconds);
		}
	}
}

function Shoot(seconds){
	if(seconds!=savedTime) {
		var bullet = Instantiate(bulletPrefab, transform.Find("spawnPoint").transform.position, Quaternion.identity);
		bullet.gameObject.tag = "enemyProjectile";
		bullet.rigidbody.AddForce(transform.forward * bulletSpeed);
		savedTime=seconds;
	}
}

