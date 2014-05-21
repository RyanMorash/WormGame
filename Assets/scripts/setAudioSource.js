#pragma strict

@script RequireComponent(AudioSource)

function Update () {
	audio.volume = PlayerPrefs.GetFloat("Music Volume");
}