(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/authorization/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/authorization/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _services_songs_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/songs/song.service */ "./src/app/services/songs/song.service.ts");
/* harmony import */ var _services_playlist_playlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/playlist/playlist.service */ "./src/app/services/playlist/playlist.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");







class AuthGuard {
    constructor(router, authenticationService, songService, playlistService, toastService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.songService = songService;
        this.playlistService = playlistService;
        this.toastService = toastService;
        this.profile = 'profile';
        this.edit = 'edit';
        this.song = 'song';
        this.delete = 'delete';
        this.playlist = 'playlist';
        this.add = 'add';
    }
    checkPermission(target, str) {
        for (let i = 0; i < str.length; i++) {
            if (target == str[i]) {
                return true;
            }
        }
        return false;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        let str = route.url.toString().split(',');
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) == -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            if (this.checkPermission(this.profile, str) && this.checkPermission(this.edit, str)) {
                if ((+route.paramMap.get('id')) != currentUser.id) {
                    this.toastService.error("Bạn không có quyền chỉnh sửa profile này!");
                    this.router.navigate(['/']);
                    return false;
                }
            }
            if (this.checkPermission(this.edit, str)) {
                let songId = +route.paramMap.get("id");
                let currentSong;
                this.songService.getSongById(songId).subscribe(data => {
                    currentSong = data;
                    let userId = currentSong.user.id;
                    if (userId != currentUser.id) {
                        this.toastService.error('Bạn không có quyền chỉnh sửa bài hát này!');
                        this.router.navigate(['/']);
                        return false;
                    }
                });
            }
            if (this.checkPermission(this.song, str) && this.checkPermission(this.add, str)) {
                let playlistId = +route.paramMap.get('id');
                let currentPlaylist;
                this.playlistService.getPlayListById(playlistId).subscribe(data => {
                    currentPlaylist = data;
                    let userId = currentPlaylist.userId;
                    console.log(userId);
                    console.log(currentUser.id);
                    if (userId != currentUser.id) {
                        this.toastService.error("Bạn không có quyền chỉnh sửa playlist này!");
                        this.router.navigate(['/']);
                        return false;
                    }
                });
            }
            // authorised so return true
            return true;
        }
        this.toastService.error('Tính năng này yêu cầu đăng nhập!');
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_songs_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_playlist_playlist_service__WEBPACK_IMPORTED_MODULE_4__["PlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _services_songs_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"] }, { type: _services_playlist_playlist_service__WEBPACK_IMPORTED_MODULE_4__["PlaylistService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/artist/artist.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/artist/artist.service.ts ***!
  \***************************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ArtistService {
    constructor(http) {
        this.http = http;
        this.url_api = 'http://localhost:8080/api/artist';
    }
    getAll() {
        return this.http.get(this.url_api + '/list');
    }
    getArtistById(id) {
        return this.http.get(this.url_api + '/' + id + '/detail');
    }
    saveArtist(data) {
        return this.http.post(this.url_api + '/save', data);
    }
    deleteArtistById(id) {
        return this.http.delete(this.url_api + '/' + id + '/delete');
    }
}
ArtistService.ɵfac = function ArtistService_Factory(t) { return new (t || ArtistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ArtistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArtistService, factory: ArtistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/interactive/active.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/interactive/active.service.ts ***!
  \********************************************************/
/*! exports provided: ActiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveService", function() { return ActiveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ActiveService {
    constructor(http) {
        this.http = http;
    }
    getReviewBySong(songId) {
        return this.http.get("http://localhost:8080/getReview/song/" + songId);
    }
    likeSong(songId, userId) {
        return this.http.get("http://localhost:8080/likeSong/" + songId + "/" + userId);
    }
    getReviewByPlaylist(playlistId) {
        return this.http.get("http://localhost:8080/getReview/song/" + playlistId);
    }
    likePlaylist(playlistId, userId) {
        return this.http.get("http://localhost:8080/likePlaylist/" + playlistId + "/" + userId);
    }
}
ActiveService.ɵfac = function ActiveService_Factory(t) { return new (t || ActiveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ActiveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActiveService, factory: ActiveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class UserService {
    constructor(http) {
        this.http = http;
        this.API_USER_URL = 'http://localhost:8080/api/user/';
    }
    getUserList() {
        return this.http.get(this.API_USER_URL + 'list');
    }
    getAllSongByUser(id) {
        return this.http.get(this.API_USER_URL + id + "/songs");
    }
    getProfileByUserId(id) {
        return this.http.get(this.API_USER_URL + id + '/profile');
    }
    getUserById(id) {
        return this.http.get(this.API_USER_URL + id + '/detail');
    }
    editProfileByUserId(id, profile) {
        return this.http.put(this.API_USER_URL + id + '/edit', profile);
    }
    changePassword(id, password) {
        return this.http.post(this.API_USER_URL + id + '/password/update', password);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map