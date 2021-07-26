/**
 * Created by mr_nili on 10/15/2017.
 */

function SpinScroll(target, imagesLength, path) {
    this.canvasZone = document.getElementById(target);
    this.images		= [];
    this.path 		= path;
    this.imagesLength = imagesLength;
    this.rotator	  = new ImageRotator(this.canvasZone);
    this.index	= 0;
    this.begin	= window.innerHeight - this.canvasZone.offsetHeight;
    this.end	= 0;
    this.step	= this.begin / (this.imagesLength - 1);
    this.getImagesArray();
    this.ready = false;
};


SpinScroll.prototype = {

    getImagesArray: function() {

        var imagesloaded = 0
            ,	self = this;

        for (var i = 0; i < this.imagesLength; i++) {
            this.images[i] 	   = new Image();
            this.images[i].src = this.path + i + '.jpg';

            this.images[i].onload = function() {
                imagesloaded++;
                if (imagesloaded === self.imagesLength) {
                    self.ready = true;
                    self.start(animate);
                }
            }
        }
    },

    getScrollY: function(object) {
        var y = object.offsetTop - window.pageYOffset + 180;
        return y;
    },

    adaptSize: function() {

        var a = this.canvasZone
            ,	x = a.offsetWidth;

        a.style.height = a.offsetWidth + 'px';
        this.rotator.resizeFrame(x,x);
    },

    getIndex: function(coordinate) {

        var index = 0;

        if (coordinate > this.end && coordinate < this.begin) {
            index = -coordinate / this.step;
        } else if (coordinate <= this.end) {
            index = this.imagesLength - 1;
        } else if (coordinate >= this.begin) {
            index = 0;
        };

        return index;
    },

    drawImages: function() {

        this.adaptSize();
        this.y =  this.getScrollY(this.canvasZone);
        this.index =  this.getIndex(this.y);
        this.rotator.drawFrame(this.index );
    },

    start: function(callback) {

        this.rotator.setImages(this.images);
        this.adaptSize();
        callback();
    }
};