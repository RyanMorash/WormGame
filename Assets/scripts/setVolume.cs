using UnityEngine;
using System.Collections;

public class setVolume : MonoBehaviour {

	private UISlider _slider;
	public static float musicVol = 1;

	// Use this for initialization
	void Start () {
		_slider = gameObject.GetComponent<UISlider>();
		_slider.sliderValue = musicVol;
		_slider.onValueChange += OnValueChange;
	}
	
	// Update is called once per frame
	void OnValueChange(float val) {
		musicVol = val;
		print(val);
	}
}
