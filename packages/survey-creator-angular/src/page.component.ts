import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, SurveyModel } from "survey-core";
import { CreatorBase, PageAdorner } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";

@Component({
  selector: "svc-page",
  templateUrl: "./page.component.html",
  styles: []
})
export class PageDesignerComponent extends CreatorModelComponent<PageAdorner> {
  @Input() model!: PageModel;
  @Input() survey!: SurveyModel;
  @Input() creator!: CreatorBase;
  @Input() isGhost?: boolean;
  public adorner!: PageAdorner;
  protected createModel(): void {
    if (this.model) {
      this.previousModel?.dispose();
      this.adorner = new PageAdorner(this.creator, this.model);
    }
  }
  protected getModel(): PageAdorner {
    return this.adorner;
  }
  protected getPropertiesToTrack(): string[] {
    return ["creator", "model"];
  }
  public addNewQuestion(event: any) {
    event.stopPropagation();
    this.adorner.addNewQuestion(this.adorner, event);
  }
  public selectQuestionType(event: any) {
    event.stopPropagation();
    this.adorner.questionTypeSelectorModel.action();
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.adorner.dispose();
  }
}

AngularComponentFactory.Instance.registerComponent("svc-page", PageDesignerComponent);

