using UnityEngine;
using System.Collections;

public class setVolume : MonoBehaviour {

	private UISlider _slider;

	// Use this for initialization
	void Start () {
		_slider = gameObject.GetComponent<UISlider>();
		_slider.sliderValue = PlayerPrefs.GetFloat("Music Volume");
		_slider.onValueChange += OnValueChange;
	}
	
	// Update is called once per frame
	void OnValueChange(float val) {
		PlayerPrefs.SetFloat("Music Volume", val);
		print(val);
	}
}
