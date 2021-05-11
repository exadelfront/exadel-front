import {Component, Input, Provider, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ChooseItemsComponent),
  multi: true
};
@Component({
  selector: 'app-choose-items',
  templateUrl: './choose-items.component.html',
  styleUrls: ['./choose-items.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class ChooseItemsComponent implements ControlValueAccessor {
  userSelects = [];
  inputText: string;

  @Input() suggestions = [];
  @Input() placeholder?: string;
  temporary = [];

  visible = false;

  inputChanged(): void {
    this.temporary = this.suggestions.filter((elem) => this.isShown(elem));
    if (this.temporary.length <= 0) {
      this.temporary.push(this.inputText);
      // this.suggestions.unshift(this.inputText);
    }
  }

  isShown(s1: string): boolean {
    if (this.inputText) {
      return (s1.toLowerCase().includes(this.inputText.toLowerCase()));
    }
    return true;
  }

  suggest(): void {
    this.visible = !this.visible;
    this.inputChanged();
  }

  isSelected(s: any): boolean {
    return this.userSelects.findIndex((item) => item === s) > -1;
  }

  selectSuggestion(s): void {
    this.userSelects.find((item) => item === s) ?
      this.userSelects = this.userSelects.filter((item) => item !== s) :
      this.userSelects.push(s);
    this.onChange(this.userSelects);
    this.visible = false;
    this.inputText = '';
  }

  deleteSelects(s): void {
    this.userSelects = this.userSelects.filter((item) => item !== s);
    this.onChange(this.userSelects);
  }

  private onChange = (value: any) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    if (obj) {
      this.userSelects = obj;
    }
  }
}
