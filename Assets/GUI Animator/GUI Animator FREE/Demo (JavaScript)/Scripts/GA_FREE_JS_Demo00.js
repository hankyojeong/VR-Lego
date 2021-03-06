// GUI Animator FREE
// Version: 1.0.1
// Compatilble: Unity 4.7.1 or higher and Unity 5.3.4 or higher, more info in Readme.txt file.
//
// Author:	Gold Experience Team (http://www.ge-team.com)
//
// Unity Asset Store:					https://www.assetstore.unity3d.com/en/#!/content/58843
// GE Store:							http://www.ge-team.com/store/en/products/gui-animator-free/
// Full version on Unity Asset Store:	https://www.assetstore.unity3d.com/en/#!/content/28709
// Full version on GE Store:			http://www.ge-team.com/store/en/products/gui-animator-for-unity-ui/
//
// Please direct any bugs/comments/suggestions to geteamdev@gmail.com


// ######################################################################
// GA_FREE_Demo00 class
// This class loads "GA FREE JS - Demo00 (960x600px)" scene.
// ######################################################################

class GA_FREE_JS_Demo00 extends MonoBehaviour {
	
	// ########################################
	// MonoBehaviour Functions
	// ########################################
	
	// Awake is called when the script instance is being loaded.
	// http://docs.unity3d.com/ScriptReference/MonoBehaviour.Awake.html
    function Awake () {
        if(enabled)
        {
            // Set GUIAnimSystemFREE.Instance.m_AutoAnimation to false in Awake() will let you control all GUI Animator elements in the scene via scripts.
			GUIAnimSystemFREE.Instance.m_AutoAnimation = false;
        }
    }

	// Start is called on the frame when a script is enabled just before any of the Update methods is called the first time.
	// http://docs.unity3d.com/ScriptReference/MonoBehaviour.Start.html
    function Start () {
		StartCoroutine(ShowText(1.0));
    }
	
	// Update is called every frame, if the MonoBehaviour is enabled.
	// http://docs.unity3d.com/ScriptReference/MonoBehaviour.Update.html
    function Update () {
		
    }
	
	// ########################################
	// Delay Functions
	// ########################################
    
    function ShowText (Delay:float) : IEnumerator
    {
    
		// Find game object names "Panel (Middle Center)"
		var go:GameObject = GameObject.Find("Panel (Middle Center)");

		// Play move-in animations
		if(go)
			GUIAnimSystemFREE.Instance.MoveIn(go.transform, true);

		// wait for 3 seconds
		yield WaitForSeconds(3);

		// Play move-out animations
		if(go)
			GUIAnimSystemFREE.Instance.MoveOut(go.transform, true);

		// Wait for a while
		yield WaitForSeconds(Delay/2);

		// Load next demo scene
		// Unity 5.3 or higher uses SceneManager.LoadScene instead of Application.LoadLevel,
		// see http://docs.unity3d.com/Manual/UpgradeGuide53.html
		// and http://docs.unity3d.com/530/Documentation/ScriptReference/SceneManagement.SceneManager.html
		SceneManagement.SceneManager.LoadScene("GA FREE JS - Demo00 (960x600px)");
    }
}