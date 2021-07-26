/**
 * Created by mr_nili on 10/15/2017.
 */

var     FirstSpin = new SpinScroll('First-Spin', 41, 'images/spiners/First-Spin/' )
    ,	SecondSpin = new SpinScroll('Second-Spin', 14, 'images/spiners/Second-Spin/')
    ,	ThirdSpin = new SpinScroll('Third-Spin',  14, 'images/spiners/Third-Spin/' );


function animate() {

    if (FirstSpin.ready) { FirstSpin.drawImages() };
    if (SecondSpin.ready) { SecondSpin.drawImages() };
    if (ThirdSpin.ready) { ThirdSpin.drawImages() };

    requestAnimationFrame(animate);
};