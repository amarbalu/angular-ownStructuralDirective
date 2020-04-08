import { Directive,ViewContainerRef,TemplateRef,Input } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[hide]'
})
export class HideDirective {
embedded=false;
@Input() hide:boolean;
  constructor(public viewRef:ViewContainerRef,
  private tempRef: TemplateRef) { }
  ngOnChanges():void{

  if(this.hide){
this.viewRef.clear();
  }else{
this.viewRef.createEmbeddedView(this.tempRef);
  }
  }
}