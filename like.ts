// My solution
export class LikeModule {
  constructor(public current_likes: number, public selected: boolean) {}
  addLike() {
    this.current_likes = this.current_likes + 1;
  }
  removeLike() {
    this.current_likes = this.current_likes + 1;
  }
  manageLike() {
    if (this.selected) {
      this.removeLike();
    } else this.addLike();
  }
}

// My solution
export class LikeModule_solution {
  constructor(public current_likes: number, public selected: boolean) {}
  onClick() {
    this.current_likes = this.selected
      ? --this.current_likes
      : ++this.current_likes;
    this.selected = !this.selected;
  }
}
