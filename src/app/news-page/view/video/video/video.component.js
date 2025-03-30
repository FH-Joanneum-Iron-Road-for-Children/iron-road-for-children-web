'use strict';
var __runInitializers =
  (this && this.__runInitializers) ||
  function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue
        ? initializers[i].call(thisArg, value)
        : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
var __esDecorate =
  (this && this.__esDecorate) ||
  function (
    ctor,
    descriptorIn,
    decorators,
    contextIn,
    initializers,
    extraInitializers
  ) {
    function accept(f) {
      if (f !== void 0 && typeof f !== 'function')
        throw new TypeError('Function expected');
      return f;
    }
    var kind = contextIn.kind,
      key = kind === 'getter' ? 'get' : kind === 'setter' ? 'set' : 'value';
    var target =
      !descriptorIn && ctor
        ? contextIn['static']
          ? ctor
          : ctor.prototype
        : null;
    var descriptor =
      descriptorIn ||
      (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === 'access' ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done)
          throw new TypeError(
            'Cannot add initializers after decoration has completed'
          );
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(
        kind === 'accessor'
          ? { get: descriptor.get, set: descriptor.set }
          : descriptor[key],
        context
      );
      if (kind === 'accessor') {
        if (result === void 0) continue;
        if (result === null || typeof result !== 'object')
          throw new TypeError('Object expected');
        if ((_ = accept(result.get))) descriptor.get = _;
        if ((_ = accept(result.set))) descriptor.set = _;
        if ((_ = accept(result.init))) initializers.unshift(_);
      } else if ((_ = accept(result))) {
        if (kind === 'field') initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
var __setFunctionName =
  (this && this.__setFunctionName) ||
  function (f, name, prefix) {
    if (typeof name === 'symbol')
      name = name.description ? '['.concat(name.description, ']') : '';
    return Object.defineProperty(f, 'name', {
      configurable: true,
      value: prefix ? ''.concat(prefix, ' ', name) : name,
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.videoFormComponent = exports.VideoComponent = void 0;
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var rxjs_1 = require('rxjs');
var VideoComponent = (function () {
  var _classDecorators = [
    (0, core_1.Component)({
      selector: 'app-video',
      templateUrl: './video.component.html',
      styleUrls: ['./video.component.css'],
    }),
  ];
  var _classDescriptor;
  var _classExtraInitializers = [];
  var _classThis;
  var _instanceExtraInitializers = [];
  var _video_decorators;
  var _video_initializers = [];
  var _videoId_decorators;
  var _videoId_initializers = [];
  var VideoComponent = (_classThis = /** @class */ (function () {
    function VideoComponent_1(videoService) {
      this.videoService =
        (__runInitializers(this, _instanceExtraInitializers), videoService);
      this.video = __runInitializers(this, _video_initializers, void 0);
      this.videoId = __runInitializers(this, _videoId_initializers, void 0);
      this.isLoading = true;
    }
    VideoComponent_1.prototype.ngOnDestroy = function () {
      throw new Error('Method not implemented.');
    };
    VideoComponent_1.prototype.ngOnInit = function () {
      var _this = this;
      this.videoService.getVideo().subscribe(function (video) {
        _this.video = video;
        _this.isLoading = false;
      });
      this.videoService.getVideo().subscribe(function (video) {
        return (_this.video = video);
      });
    };
    return VideoComponent_1;
  })());
  __setFunctionName(_classThis, 'VideoComponent');
  (function () {
    var _metadata =
      typeof Symbol === 'function' && Symbol.metadata
        ? Object.create(null)
        : void 0;
    _video_decorators = [(0, core_1.Input)()];
    _videoId_decorators = [(0, core_1.Input)()];
    __esDecorate(
      null,
      null,
      _video_decorators,
      {
        kind: 'field',
        name: 'video',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'video' in obj;
          },
          get: function (obj) {
            return obj.video;
          },
          set: function (obj, value) {
            obj.video = value;
          },
        },
        metadata: _metadata,
      },
      _video_initializers,
      _instanceExtraInitializers
    );
    __esDecorate(
      null,
      null,
      _videoId_decorators,
      {
        kind: 'field',
        name: 'videoId',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'videoId' in obj;
          },
          get: function (obj) {
            return obj.videoId;
          },
          set: function (obj, value) {
            obj.videoId = value;
          },
        },
        metadata: _metadata,
      },
      _videoId_initializers,
      _instanceExtraInitializers
    );
    __esDecorate(
      null,
      (_classDescriptor = { value: _classThis }),
      _classDecorators,
      { kind: 'class', name: _classThis.name, metadata: _metadata },
      null,
      _classExtraInitializers
    );
    VideoComponent = _classThis = _classDescriptor.value;
    if (_metadata)
      Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata,
      });
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (VideoComponent = _classThis);
})();
exports.VideoComponent = VideoComponent;
// TEST
var videoFormComponent = (function () {
  var _classDecorators = [
    (0, core_1.Component)({
      selector: 'app-video-form',
      templateUrl: './video.component.html',
      styleUrls: ['./video.component.css'],
    }),
  ];
  var _classDescriptor;
  var _classExtraInitializers = [];
  var _classThis;
  var _instanceExtraInitializers = [];
  var _video_decorators;
  var _video_initializers = [];
  var _videoPath_decorators;
  var _videoPath_initializers = [];
  var _videoId_decorators;
  var _videoId_initializers = [];
  var videoFormComponent = (_classThis = /** @class */ (function () {
    function videoFormComponent_1(router, dialog, videoService) {
      this.router =
        (__runInitializers(this, _instanceExtraInitializers), router);
      this.dialog = dialog;
      this.videoService = videoService;
      this.video = __runInitializers(this, _video_initializers, {
        videoId: 0,
        altText: '',
        path: '',
      });
      this.videoPath = __runInitializers(this, _videoPath_initializers, '');
      this.videoId = __runInitializers(this, _videoId_initializers, 0);
      this.videoFormGroup = new forms_1.FormGroup({
        videoId: new forms_1.FormControl(0, forms_1.Validators.required),
        altText: new forms_1.FormControl('', forms_1.Validators.required),
        path: new forms_1.FormControl('', forms_1.Validators.nullValidator),
      });
      this.receivedVideo = this.video;
      this.uploadedFile = null;
      this.addVideoList = Array(4).fill(null);
      this.filePreviews = Array(4).fill(null);
      this.subscription = new rxjs_1.Subscription();
      this.altText = '';
      this.path = '';
    }
    videoFormComponent_1.prototype.ngOnInit = function () {
      var _this = this;
      if (this.videoId != undefined) {
        this.videoService.getVideo().subscribe(function (video) {
          var _a, _b, _c, _d;
          _this.video = video;
          if (_this.video) {
            // edit video
            _this.videoFormGroup.patchValue({
              videoId: _this.videoId,
              altText: _this.video.altText,
              path: _this.video.path,
            });
            _this.path =
              (_b =
                (_a = _this.video) === null || _a === void 0
                  ? void 0
                  : _a.path) !== null && _b !== void 0
                ? _b
                : null;
            _this.altText =
              (_d =
                (_c = _this.video) === null || _c === void 0
                  ? void 0
                  : _c.altText) !== null && _d !== void 0
                ? _d
                : null;
            _this.receivedVideo = _this.video;
            _this.receivedVideo = _this.video;
            console.log(_this.receivedVideo);
          }
        });
      }
    };
    videoFormComponent_1.prototype.openFileSelectDialog = function (index) {
      var _a;
      (_a = document.getElementById('file-input' + index)) === null ||
      _a === void 0
        ? void 0
        : _a.click();
    };
    videoFormComponent_1.prototype.onFileSelected = function (video, index) {
      var _this = this;
      this.uploadedFile = video;
      if (this.isValidVideoFile()) {
        this.addVideoList[index] = this.uploadedFile;
        this.path = '';
        this.altText = '';
        this.videoId = 0;
        // preview
        var reader = new FileReader();
        reader.onload = function (e) {
          _this.filePreviews[index] = e.target.result;
        };
        reader.readAsDataURL(this.uploadedFile);
      }
    };
    videoFormComponent_1.prototype.isValidVideoFile = function () {
      if (this.uploadedFile) {
        var allowedFormat = 'video/mp4';
        var maxFileSize = 2 * 1024 * 1024; // 2MB
        return (
          allowedFormat.includes(this.uploadedFile.type) &&
          this.uploadedFile.size <= maxFileSize
        );
      }
      return false;
    };
    videoFormComponent_1.prototype.submit = function () {
      var _this = this;
      var titleVideo;
      var sentVideo = [];
      var sentVideoCounter = 0;
      for (var _i = 0, _a = this.addVideoList; _i < _a.length; _i++) {
        var addVideo = _a[_i];
        if (addVideo !== null) {
          var fileType = '';
          if (addVideo.type == 'video/mp4') {
            fileType = 'MP4';
          }
          var addedVideo = this.video;
          titleVideo = addedVideo;
          this.subscription.add(
            this.videoService.postVideos(addedVideo).subscribe({
              next: function (response) {
                sentVideoCounter++;
                if (sentVideoCounter === 1) {
                  titleVideo = response;
                } else {
                  sentVideo.push(response);
                }
              },
              error: function (error) {
                console.log(error);
              },
              complete: function () {
                // if video is uploaded
                var videoId = _this.videoId;
                if (videoId == null || videoId == 0) {
                  videoId = 0;
                }
                if (sentVideo) {
                  var video = {
                    videoId: _this.videoId,
                    altText: _this.altText,
                    path: _this.path,
                  };
                  console.log(video);
                  _this.videoService
                    .createVideo(video)
                    .subscribe(function (video) {
                      if (video) {
                        _this.router.navigate(['news-page']);
                      }
                    });
                }
              },
            })
          );
        }
      }
    };
    videoFormComponent_1.prototype.ngOnDestroy = function () {
      this.subscription.unsubscribe();
    };
    return videoFormComponent_1;
  })());
  __setFunctionName(_classThis, 'videoFormComponent');
  (function () {
    var _metadata =
      typeof Symbol === 'function' && Symbol.metadata
        ? Object.create(null)
        : void 0;
    _video_decorators = [(0, core_1.Input)()];
    _videoPath_decorators = [(0, core_1.Input)()];
    _videoId_decorators = [(0, core_1.Input)()];
    __esDecorate(
      null,
      null,
      _video_decorators,
      {
        kind: 'field',
        name: 'video',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'video' in obj;
          },
          get: function (obj) {
            return obj.video;
          },
          set: function (obj, value) {
            obj.video = value;
          },
        },
        metadata: _metadata,
      },
      _video_initializers,
      _instanceExtraInitializers
    );
    __esDecorate(
      null,
      null,
      _videoPath_decorators,
      {
        kind: 'field',
        name: 'videoPath',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'videoPath' in obj;
          },
          get: function (obj) {
            return obj.videoPath;
          },
          set: function (obj, value) {
            obj.videoPath = value;
          },
        },
        metadata: _metadata,
      },
      _videoPath_initializers,
      _instanceExtraInitializers
    );
    __esDecorate(
      null,
      null,
      _videoId_decorators,
      {
        kind: 'field',
        name: 'videoId',
        static: false,
        private: false,
        access: {
          has: function (obj) {
            return 'videoId' in obj;
          },
          get: function (obj) {
            return obj.videoId;
          },
          set: function (obj, value) {
            obj.videoId = value;
          },
        },
        metadata: _metadata,
      },
      _videoId_initializers,
      _instanceExtraInitializers
    );
    __esDecorate(
      null,
      (_classDescriptor = { value: _classThis }),
      _classDecorators,
      { kind: 'class', name: _classThis.name, metadata: _metadata },
      null,
      _classExtraInitializers
    );
    videoFormComponent = _classThis = _classDescriptor.value;
    if (_metadata)
      Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata,
      });
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (videoFormComponent = _classThis);
})();
exports.videoFormComponent = videoFormComponent;
