"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeModule_solution = exports.LikeModule = void 0;
// My solution
var LikeModule = /** @class */ (function () {
    function LikeModule(current_likes, selected) {
        this.current_likes = current_likes;
        this.selected = selected;
    }
    LikeModule.prototype.addLike = function () {
        this.current_likes = this.current_likes + 1;
    };
    LikeModule.prototype.removeLike = function () {
        this.current_likes = this.current_likes + 1;
    };
    LikeModule.prototype.manageLike = function () {
        if (this.selected) {
            this.removeLike();
        }
        else
            this.addLike();
    };
    return LikeModule;
}());
exports.LikeModule = LikeModule;
// My solution
var LikeModule_solution = /** @class */ (function () {
    function LikeModule_solution(current_likes, selected) {
        this.current_likes = current_likes;
        this.selected = selected;
    }
    LikeModule_solution.prototype.onClick = function () {
        this.current_likes = this.selected
            ? --this.current_likes
            : ++this.current_likes;
        this.selected = !this.selected;
    };
    return LikeModule_solution;
}());
exports.LikeModule_solution = LikeModule_solution;
