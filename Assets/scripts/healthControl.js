#pragma strict
var oneHeart : Texture2D;
var twoHearts : Texture2D;
var threeHearts : Texture2D;
var bodyPart1 : Transform;
var bodyPart2 : Transform;

static var LIVES = 3;
static var HITS = 0;

function Start () {

}

function Update () {
	print("Lives: "+LIVES+" Hits: "+HITS);

	switch(LIVES) {
		case 3:
			guiTexture.texture = threeHearts;
		break;
		
		case 2:
			guiTexture.texture = twoHearts;
		break;
			
		case 1:
			guiTexture.texture = oneHeart;
		break;
			
		case 0:
			//game over script here
		break;
	}
	
	switch(HITS) {
		case 0:
			//Do Nothing
		break;
	
		case 1:
			bodyPart2.renderer.enabled=false;
		break;
		
		case 2:
			bodyPart1.renderer.enabled=false;
			bodyPart2.renderer.enabled=false;
		break;
		
		case 3:
			LIVES -= 1;
			HITS = 0;
			MoveAround.dead = true;
			bodyPart1.renderer.enabled=true;
			bodyPart2.renderer.enabled=true;
		break;
		
		default:
			LIVES -= 1;
			HITS = 0;
			MoveAround.dead = true;
			bodyPart1.renderer.enabled=true;
			bodyPart2.renderer.enabled=true;
		break;
	}
}