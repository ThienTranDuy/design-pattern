# Design Patterns

## Creational Patterns - Tạo đối tượng

### 1. Singleton
**Định nghĩa**: Đảm bảo chỉ có 1 instance duy nhất của class trong toàn bộ ứng dụng.

**Khi nào dùng**: Khi cần đảm bảo chỉ có 1 object duy nhất (database connection, logger, config manager).

**Cấu trúc**:
```typescript
class Singleton {
  private static instance: Singleton | null = null
  
  private constructor() {}
  
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}
```

**Lợi ích**:
- ✅ Kiểm soát access đến shared resource
- ✅ Tiết kiệm memory (chỉ 1 instance)
- ✅ Global access point

**Ví dụ thực tế**: Database connection pool, Logger, Configuration manager, Cache.

---

### 2. Factory Method
**Định nghĩa**: Định nghĩa interface để tạo object, nhưng để subclass quyết định class nào được khởi tạo.

**Khi nào dùng**: Khi không biết trước loại object cần tạo, hoặc muốn delegate việc tạo object cho subclass.

**Cấu trúc**:
```typescript
interface Product {
  operation(): void
}

abstract class Creator {
  abstract createProduct(): Product
  
  someOperation(): void {
    const product = this.createProduct()
    product.operation()
  }
}

class ConcreteCreatorA extends Creator {
  createProduct(): Product {
    return new ConcreteProductA()
  }
}
```

**Lợi ích**:
- ✅ Loose coupling giữa creator và product
- ✅ Single Responsibility Principle
- ✅ Open/Closed Principle (dễ extend)

**Ví dụ thực tế**: Logistics systems (road/sea transport), Document creators, UI component factories.

---

### 3. Abstract Factory
**Định nghĩa**: Tạo families của các object liên quan hoặc phụ thuộc lẫn nhau mà không cần specify concrete class.

**Khi nào dùng**: Khi cần tạo nhiều nhóm object có liên quan với nhau (cross-platform UI, theme systems).

**Cấu trúc**:
```typescript
interface AbstractFactory {
  createProductA(): ProductA
  createProductB(): ProductB
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA(): ProductA { return new ProductA1() }
  createProductB(): ProductB { return new ProductB1() }
}

class ConcreteFactory2 implements AbstractFactory {
  createProductA(): ProductA { return new ProductA2() }
  createProductB(): ProductB { return new ProductB2() }
}
```

**Lợi ích**:
- ✅ Đảm bảo tính nhất quán giữa các product
- ✅ Tách client code khỏi concrete products
- ✅ Dễ swap families of products

**Ví dụ thực tế**: UI themes (Windows/Mac components), Database adapters (MySQL/PostgreSQL), Cross-platform apps.

---

### 4. Builder
**Định nghĩa**: Xây dựng object phức tạp từng bước một, tách biệt construction khỏi representation.

**Khi nào dùng**: Object có nhiều optional parameters hoặc cần khởi tạo phức tạp theo từng bước.

**Cấu trúc**:
```typescript
class Product {
  parts: string[] = []
}

class Builder {
  private product: Product = new Product()
  
  buildPartA(): Builder {
    this.product.parts.push('Part A')
    return this
  }
  
  buildPartB(): Builder {
    this.product.parts.push('Part B')
    return this
  }
  
  build(): Product {
    return this.product
  }
}
```

**Lợi ích**:
- ✅ Fluent interface, dễ đọc
- ✅ Kiểm soát quá trình construction
- ✅ Tái sử dụng construction code

**Ví dụ thực tế**: Query builders (SQL), HTTP request builders, Complex configuration objects, HTML/DOM builders.

---

### 5. Prototype
**Định nghĩa**: Tạo object mới bằng cách clone từ prototype thay vì khởi tạo mới.

**Khi nào dùng**: Khi khởi tạo object tốn kém hoặc cần tạo nhiều object tương tự nhau.

**Cấu trúc**:
```typescript
interface Prototype {
  clone(): Prototype
}

class ConcretePrototype implements Prototype {
  constructor(public field: string) {}
  
  clone(): ConcretePrototype {
    return new ConcretePrototype(this.field)
  }
}
```

**Lợi ích**:
- ✅ Tránh khởi tạo lại object phức tạp
- ✅ Giảm số lượng subclasses
- ✅ Thêm/xóa objects runtime

**Ví dụ thực tế**: Game entities (enemies, items), Document templates, Graphic editors (copy shapes).

---

## Structural Patterns - Cấu trúc object

### 6. Adapter
**Định nghĩa**: Chuyển đổi interface của class thành interface khác mà client mong đợi.

**Khi nào dùng**: Muốn sử dụng class có interface không tương thích với code hiện tại.

**Cấu trúc**:
```typescript
interface Target {
  request(): void
}

class Adaptee {
  specificRequest(): void {}
}

class Adapter implements Target {
  constructor(private adaptee: Adaptee) {}
  
  request(): void {
    this.adaptee.specificRequest()
  }
}
```

**Lợi ích**:
- ✅ Single Responsibility Principle
- ✅ Tích hợp legacy code/third-party libraries
- ✅ Open/Closed Principle

**Ví dụ thực tế**: Legacy system integration, Third-party library wrappers, Data format converters (XML to JSON).

---

### 7. Bridge
**Định nghĩa**: Tách abstraction khỏi implementation để cả hai có thể thay đổi độc lập.

**Khi nào dùng**: Tránh explosion of subclasses khi có nhiều dimensions độc lập (shape × color).

**Cấu trúc**:
```typescript
interface Implementation {
  operationImpl(): void
}

class Abstraction {
  constructor(protected implementation: Implementation) {}
  
  operation(): void {
    this.implementation.operationImpl()
  }
}

class ConcreteImplementationA implements Implementation {
  operationImpl(): void {}
}
```

**Lợi ích**:
- ✅ Giảm số lượng subclasses
- ✅ Dễ extend abstraction và implementation độc lập
- ✅ Platform independence

**Ví dụ thực tế**: UI themes (shape × color), Device drivers (device × OS), Remote controls (remote × device).

---

### 8. Composite
**Định nghĩa**: Compose objects thành tree structure và xử lý individual/composite objects đồng nhất.

**Khi nào dùng**: Khi cần xử lý cấu trúc cây (part-whole hierarchy).

**Cấu trúc**:
```typescript
interface Component {
  operation(): void
}

class Leaf implements Component {
  operation(): void {}
}

class Composite implements Component {
  private children: Component[] = []
  
  add(component: Component): void {
    this.children.push(component)
  }
  
  operation(): void {
    this.children.forEach(child => child.operation())
  }
}
```

**Lợi ích**:
- ✅ Xử lý đồng nhất individual và composite
- ✅ Dễ thêm component types mới
- ✅ Đơn giản hóa client code

**Ví dụ thực tế**: File systems (files/folders), UI components (nested containers), Organization structures, Graphics (shapes/groups).

---

### 9. Decorator
**Định nghĩa**: Thêm behavior/responsibility mới cho object động bằng cách wrap nó.

**Khi nào dùng**: Muốn thêm tính năng mà không modify class gốc hoặc tạo nhiều subclasses.

**Cấu trúc**:
```typescript
interface Component {
  operation(): void
}

class ConcreteComponent implements Component {
  operation(): void {}
}

class Decorator implements Component {
  constructor(protected component: Component) {}
  
  operation(): void {
    this.component.operation()
  }
}

class ConcreteDecorator extends Decorator {
  operation(): void {
    super.operation()
    this.addedBehavior()
  }
  
  addedBehavior(): void {}
}
```

**Lợi ích**:
- ✅ Thêm behavior runtime
- ✅ Tránh subclass explosion
- ✅ Single Responsibility Principle

**Ví dụ thực tế**: Java I/O streams, Coffee add-ons (milk/sugar), Text formatting (bold/italic), Middleware chains.

---

### 10. Facade
**Định nghĩa**: Cung cấp unified interface đơn giản cho một subsystem phức tạp.

**Khi nào dùng**: Muốn simplify API hoặc ẩn complexity của nhiều classes.

**Cấu trúc**:
```typescript
class SubsystemA {
  operationA(): void {}
}

class SubsystemB {
  operationB(): void {}
}

class Facade {
  private subsystemA = new SubsystemA()
  private subsystemB = new SubsystemB()
  
  simpleOperation(): void {
    this.subsystemA.operationA()
    this.subsystemB.operationB()
  }
}
```

**Lợi ích**:
- ✅ Đơn giản hóa interface
- ✅ Giảm coupling giữa client và subsystem
- ✅ Dễ sử dụng và maintain

**Ví dụ thực tế**: Computer startup (CPU/Memory/HDD), Video conversion libraries, Payment gateways, Complex API wrappers.

---

### 11. Flyweight
**Định nghĩa**: Chia sẻ data chung (intrinsic state) giữa nhiều objects để tiết kiệm memory.

**Khi nào dùng**: Có nhiều objects tương tự và memory bị hạn chế.

**Cấu trúc**:
```typescript
class Flyweight {
  constructor(private sharedState: any) {}
  
  operation(uniqueState: any): void {
    // Use both shared and unique state
  }
}

class FlyweightFactory {
  private flyweights = new Map<string, Flyweight>()
  
  getFlyweight(key: string): Flyweight {
    if (!this.flyweights.has(key)) {
      this.flyweights.set(key, new Flyweight(key))
    }
    return this.flyweights.get(key)!
  }
}
```

**Lợi ích**:
- ✅ Tiết kiệm RAM đáng kể
- ✅ Cải thiện performance khi có nhiều objects
- ✅ Tách intrinsic/extrinsic state

**Ví dụ thực tế**: Game trees/particles (share textures), Text editors (character formatting), String interning, Cache systems.

---

### 12. Proxy
**Định nghĩa**: Cung cấp placeholder/surrogate để kiểm soát access đến object khác.

**Khi nào dùng**: Lazy loading, access control, logging, caching, remote objects.

**Cấu trúc**:
```typescript
interface Subject {
  request(): void
}

class RealSubject implements Subject {
  request(): void {}
}

class Proxy implements Subject {
  private realSubject: RealSubject | null = null
  
  request(): void {
    if (!this.realSubject) {
      this.realSubject = new RealSubject() // Lazy initialization
    }
    this.realSubject.request()
  }
}
```

**Lợi ích**:
- ✅ Lazy initialization
- ✅ Access control và validation
- ✅ Logging, caching
- ✅ Remote proxy (distributed systems)

**Ví dụ thực tế**: Virtual proxies (lazy load images), Protection proxies (access control), Remote proxies (RPC), Smart references.

---

## Behavioral Patterns - Tương tác giữa objects

### 13. Strategy
**Định nghĩa**: Đóng gói các thuật toán (behaviors) thành các class riêng biệt và cho phép chúng có thể thay đổi được.

**Khi nào dùng**: Khi có nhiều cách xử lý khác nhau cho cùng 1 tác vụ.

**Cấu trúc**:
```typescript
interface Strategy {
  execute(): void
}

class ConcreteStrategyA implements Strategy {
  execute(): void { /* cách A */ }
}

class ConcreteStrategyB implements Strategy {
  execute(): void { /* cách B */ }
}

class Context {
  constructor(private strategy: Strategy) {}
  
  doSomething(): void {
    this.strategy.execute()
  }
}
```

**Lợi ích**:
- ✅ Tránh if/else dài
- ✅ Dễ thêm strategy mới (Open/Closed Principle)
- ✅ Tách biệt logic, dễ test
- ✅ Switch behavior runtime

**Ví dụ thực tế**: Payment methods, Notification channels, Sorting algorithms, Compression algorithms, Authentication methods.

---

### 14. Chain of Responsibility
**Định nghĩa**: Chain các handlers, mỗi handler quyết định xử lý request hoặc pass cho handler tiếp theo.

**Khi nào dùng**: Request có thể được xử lý bởi nhiều handlers khác nhau.

**Cấu trúc**:
```typescript
abstract class Handler {
  private nextHandler: Handler | null = null
  
  setNext(handler: Handler): Handler {
    this.nextHandler = handler
    return handler
  }
  
  handle(request: any): void {
    if (this.canHandle(request)) {
      this.process(request)
    } else if (this.nextHandler) {
      this.nextHandler.handle(request)
    }
  }
  
  protected abstract canHandle(request: any): boolean
  protected abstract process(request: any): void
}
```

**Lợi ích**:
- ✅ Giảm coupling giữa sender và receiver
- ✅ Linh hoạt thay đổi chain runtime
- ✅ Single Responsibility Principle

**Ví dụ thực tế**: Logging levels, Support systems (L1/L2/L3), Middleware chains, Event bubbling, Authentication chains.

---

### 15. Command
**Định nghĩa**: Đóng gói request thành object, cho phép parameterize, queue, log và undo operations.

**Khi nào dùng**: Undo/redo, queue operations, logging, macro commands.

**Cấu trúc**:
```typescript
interface Command {
  execute(): void
  undo(): void
}

class ConcreteCommand implements Command {
  constructor(private receiver: Receiver) {}
  
  execute(): void {
    this.receiver.action()
  }
  
  undo(): void {
    this.receiver.reverseAction()
  }
}

class Invoker {
  private history: Command[] = []
  
  executeCommand(command: Command): void {
    command.execute()
    this.history.push(command)
  }
}
```

**Lợi ích**:
- ✅ Undo/redo functionality
- ✅ Decouple sender khỏi receiver
- ✅ Queue và schedule commands
- ✅ Macro commands (composite)

**Ví dụ thực tế**: Text editor (undo/redo), Remote controls, Transaction systems, Task scheduling, GUI buttons.

---

### 16. Iterator
**Định nghĩa**: Cung cấp cách duyệt sequential collection mà không expose internal structure.

**Khi nào dùng**: Cần traverse nhiều loại collection khác nhau với cùng interface.

**Cấu trúc**:
```typescript
interface Iterator<T> {
  hasNext(): boolean
  next(): T
}

interface Iterable<T> {
  createIterator(): Iterator<T>
}

class ConcreteIterator<T> implements Iterator<T> {
  private index = 0
  
  constructor(private collection: T[]) {}
  
  hasNext(): boolean {
    return this.index < this.collection.length
  }
  
  next(): T {
    return this.collection[this.index++]
  }
}
```

**Lợi ích**:
- ✅ Ẩn internal structure của collection
- ✅ Single Responsibility Principle
- ✅ Hỗ trợ nhiều iterators cùng lúc

**Ví dụ thực tế**: Collections (Array/List/Tree), Database result sets, File system traversal, Social networks (BFS/DFS).

---

### 17. Mediator
**Định nghĩa**: Tập trung communication giữa các objects vào một mediator object.

**Khi nào dùng**: Nhiều objects giao tiếp phức tạp với nhau, muốn giảm coupling.

**Cấu trúc**:
```typescript
interface Mediator {
  notify(sender: Component, event: string): void
}

class ConcreteMediator implements Mediator {
  private component1: Component
  private component2: Component
  
  notify(sender: Component, event: string): void {
    // Coordinate communication between components
  }
}

class Component {
  constructor(private mediator: Mediator) {}
  
  doSomething(): void {
    this.mediator.notify(this, 'event')
  }
}
```

**Lợi ích**:
- ✅ Giảm coupling giữa components
- ✅ Tập trung control logic
- ✅ Dễ maintain và extend

**Ví dụ thực tế**: Chat rooms, Air traffic control, UI dialogs (form components), MVC controllers.

---

### 18. Memento
**Định nghĩa**: Lưu và restore state của object mà không vi phạm encapsulation.

**Khi nào dùng**: Undo/redo, snapshots, rollback, save/restore state.

**Cấu trúc**:
```typescript
class Memento {
  constructor(private state: any) {}
  
  getState(): any {
    return this.state
  }
}

class Originator {
  private state: any
  
  save(): Memento {
    return new Memento(this.state)
  }
  
  restore(memento: Memento): void {
    this.state = memento.getState()
  }
}

class Caretaker {
  private mementos: Memento[] = []
  
  push(memento: Memento): void {
    this.mementos.push(memento)
  }
  
  pop(): Memento | undefined {
    return this.mementos.pop()
  }
}
```

**Lợi ích**:
- ✅ Undo/redo functionality
- ✅ Không vi phạm encapsulation
- ✅ Lưu trữ history

**Ví dụ thực tế**: Text editors (undo/redo), Game saves, Database transactions (rollback), Version control systems.

---

### 19. Observer
**Định nghĩa**: Định nghĩa one-to-many dependency, khi object thay đổi state thì tự động notify tất cả dependents.

**Khi nào dùng**: Event systems, reactive programming, pub-sub patterns.

**Cấu trúc**:
```typescript
interface Observer {
  update(data: any): void
}

interface Subject {
  attach(observer: Observer): void
  detach(observer: Observer): void
  notify(): void
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = []
  private state: any
  
  attach(observer: Observer): void {
    this.observers.push(observer)
  }
  
  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer)
    this.observers.splice(index, 1)
  }
  
  notify(): void {
    this.observers.forEach(o => o.update(this.state))
  }
  
  setState(state: any): void {
    this.state = state
    this.notify()
  }
}
```

**Lợi ích**:
- ✅ Loose coupling giữa subject và observers
- ✅ Dynamic subscription
- ✅ Broadcast communication

**Ví dụ thực tế**: Event listeners (UI), MVC (Model notify View), News feeds, Stock market updates, Real-time notifications.

---

### 20. State
**Định nghĩa**: Object thay đổi behavior khi internal state thay đổi (như thể đổi class).

**Khi nào dùng**: Object có nhiều states với behavior khác nhau ở mỗi state.

**Cấu trúc**:
```typescript
interface State {
  handle(context: Context): void
}

class ConcreteStateA implements State {
  handle(context: Context): void {
    // Do something and change state
    context.setState(new ConcreteStateB())
  }
}

class ConcreteStateB implements State {
  handle(context: Context): void {
    context.setState(new ConcreteStateA())
  }
}

class Context {
  private state: State
  
  setState(state: State): void {
    this.state = state
  }
  
  request(): void {
    this.state.handle(this)
  }
}
```

**Lợi ích**:
- ✅ Tránh if/else phức tạp theo state
- ✅ Single Responsibility Principle
- ✅ Open/Closed Principle

**Ví dụ thực tế**: Document workflows (draft/moderation/published), TCP connections, Order states, Media players (play/pause/stop).

---

### 21. Template Method
**Định nghĩa**: Define skeleton của algorithm trong base class, để subclass override specific steps.

**Khi nào dùng**: Algorithms có cùng structure nhưng khác ở một vài steps.

**Cấu trúc**:
```typescript
abstract class AbstractClass {
  // Template method
  templateMethod(): void {
    this.step1()
    this.step2()
    this.step3()
  }
  
  private step1(): void {
    // Common implementation
  }
  
  protected abstract step2(): void // Subclass implements
  
  private step3(): void {
    // Common implementation
  }
}

class ConcreteClass extends AbstractClass {
  protected step2(): void {
    // Specific implementation
  }
}
```

**Lợi ích**:
- ✅ Code reuse (common steps)
- ✅ Control algorithm structure
- ✅ Open/Closed Principle

**Ví dụ thực tế**: Data parsing (CSV/JSON/XML), Game AI (same loop, different actions), Testing frameworks, Build processes.

---

### 22. Visitor
**Định nghĩa**: Thêm operations mới cho object structure mà không modify classes của elements.

**Khi nào dùng**: Cần nhiều unrelated operations trên object structure, operations thay đổi thường xuyên.

**Cấu trúc**:
```typescript
interface Visitor {
  visitElementA(element: ElementA): void
  visitElementB(element: ElementB): void
}

interface Element {
  accept(visitor: Visitor): void
}

class ElementA implements Element {
  accept(visitor: Visitor): void {
    visitor.visitElementA(this)
  }
}

class ConcreteVisitor implements Visitor {
  visitElementA(element: ElementA): void {
    // Operation on ElementA
  }
  
  visitElementB(element: ElementB): void {
    // Operation on ElementB
  }
}
```

**Lợi ích**:
- ✅ Thêm operations không modify classes
- ✅ Single Responsibility Principle
- ✅ Tập trung related operations

**Ví dụ thực tế**: AST traversal (compilers), Export to multiple formats (XML/JSON), Tax calculation, Element inspection.

---

### 23. Interpreter
**Định nghĩa**: Define grammar representation và interpreter để evaluate sentences in the language.

**Khi nào dùng**: Simple language, DSL, expression evaluation.

**Cấu trúc**:
```typescript
interface Expression {
  interpret(context: Context): any
}

class TerminalExpression implements Expression {
  constructor(private value: any) {}
  
  interpret(context: Context): any {
    return this.value
  }
}

class NonTerminalExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression
  ) {}
  
  interpret(context: Context): any {
    return this.left.interpret(context) + this.right.interpret(context)
  }
}
```

**Lợi ích**:
- ✅ Dễ thay đổi và extend grammar
- ✅ Implement grammar trực tiếp
- ✅ Dễ add new expressions

**Ví dụ thực tế**: SQL parsers, Regular expressions, Math expressions, Configuration languages, Rule engines.

---

## Nhóm patterns theo use case

**Tạo object**: Singleton, Factory Method, Abstract Factory, Builder, Prototype  
**Cấu trúc linh hoạt**: Adapter, Bridge, Composite, Decorator, Facade  
**Chia sẻ/tiết kiệm**: Flyweight, Prototype, Singleton  
**Control access**: Proxy, Facade  
**Behavior động**: Strategy, State, Decorator  
**Decouple objects**: Mediator, Observer, Command, Chain of Responsibility  
**Traverse/parse**: Iterator, Interpreter, Visitor  
**Undo/restore**: Command, Memento  
**Template/skeleton**: Template Method, Builder

---

## Design Patterns vs SOLID Principles

### S - Single Responsibility Principle (SRP)
**Mỗi class chỉ có 1 lý do để thay đổi**

**Patterns áp dụng SRP**:
- ✅ **Strategy**: Tách algorithms thành các class riêng
- ✅ **Command**: Tách request logic thành command objects
- ✅ **Decorator**: Mỗi decorator chỉ lo 1 responsibility
- ✅ **Iterator**: Tách traversal logic khỏi collection
- ✅ **Visitor**: Tách operations khỏi element structure
- ✅ **State**: Mỗi state class chỉ lo behavior của state đó
- ✅ **Chain of Responsibility**: Mỗi handler lo 1 loại request
- ✅ **Adapter**: Chỉ lo convert interface

**Ví dụ**:
```typescript
// Vi phạm SRP: Class lo nhiều việc
class User {
  validateEmail() {}
  saveToDatabase() {}
  sendWelcomeEmail() {}
}

// Đúng SRP: Tách thành 3 class với Strategy/Command
class EmailValidator { validate() {} }
class UserRepository { save() {} }
class EmailService { send() {} }
```

---

### O - Open/Closed Principle (OCP)
**Open for extension, closed for modification**

**Patterns áp dụng OCP**:
- ✅ **Strategy**: Thêm strategy mới không modify context
- ✅ **Decorator**: Thêm behavior mới mà không đổi component gốc
- ✅ **Factory Method**: Thêm product type mới không đổi factory interface
- ✅ **Template Method**: Extend bằng subclass, không modify base
- ✅ **State**: Thêm state mới không đổi context
- ✅ **Observer**: Thêm observer mới không modify subject
- ✅ **Chain of Responsibility**: Thêm handler mới vào chain
- ✅ **Composite**: Thêm component type mới không đổi client code

**Ví dụ**:
```typescript
// Vi phạm OCP: Phải modify để thêm tính năng mới
class PaymentProcessor {
  process(type: string) {
    if (type === 'credit') { /* ... */ }
    else if (type === 'paypal') { /* ... */ }
    // Thêm mới phải modify if/else này
  }
}

// Đúng OCP: Dùng Strategy, thêm mới không modify
interface PaymentStrategy {
  pay(): void
}
class CreditCardPayment implements PaymentStrategy {}
class PaypalPayment implements PaymentStrategy {}
// Thêm mới: class BitcoinPayment implements PaymentStrategy {}
```

---

### L - Liskov Substitution Principle (LSP)
**Subclass phải thay thế được superclass mà không làm hỏng chương trình**

**Patterns áp dụng LSP**:
- ✅ **Strategy**: Tất cả strategies implement cùng interface, hoán đổi được
- ✅ **Decorator**: Decorators và components cùng interface
- ✅ **Composite**: Leaf và Composite đều implement Component
- ✅ **Template Method**: Subclasses override methods nhưng vẫn đúng contract
- ✅ **State**: Tất cả states implement cùng interface
- ✅ **Factory Method**: Tất cả products implement cùng interface
- ✅ **Abstract Factory**: Families of products đều substitutable

**Ví dụ**:
```typescript
// Vi phạm LSP: Square thay đổi behavior của Rectangle
class Rectangle {
  setWidth(w) { this.width = w }
  setHeight(h) { this.height = h }
}
class Square extends Rectangle {
  setWidth(w) { this.width = this.height = w } // Khác behavior!
}

// Đúng LSP: Dùng Strategy hoặc interface riêng
interface Shape {
  area(): number
}
class Rectangle implements Shape { area() { return w * h } }
class Square implements Shape { area() { return s * s } }
```

---

### I - Interface Segregation Principle (ISP)
**Không ép client phụ thuộc vào interface không dùng**

**Patterns áp dụng ISP**:
- ✅ **Adapter**: Chỉ expose interface client cần
- ✅ **Facade**: Cung cấp simplified interface
- ✅ **Proxy**: Chỉ expose methods cần thiết
- ✅ **Bridge**: Tách interface thành abstraction và implementation
- ✅ **Decorator**: Compose behaviors cụ thể thay vì fat interface
- ✅ **Strategy**: Mỗi strategy chỉ lo 1 algorithm, không fat interface

**Ví dụ**:
```typescript
// Vi phạm ISP: Fat interface
interface Worker {
  work(): void
  eat(): void
  sleep(): void
}
class Robot implements Worker {
  work() {}
  eat() {} // Robot không ăn!
  sleep() {} // Robot không ngủ!
}

// Đúng ISP: Tách interface nhỏ, dùng Adapter/Facade
interface Workable { work(): void }
interface Eatable { eat(): void }
class Human implements Workable, Eatable {}
class Robot implements Workable {}
```

---

### D - Dependency Inversion Principle (DIP)
**Depend on abstractions, not concretions**

**Patterns áp dụng DIP**:
- ✅ **Strategy**: Context depend on Strategy interface, không depend concrete
- ✅ **Factory Method**: Client depend on Product interface
- ✅ **Abstract Factory**: Client depend on Factory interface
- ✅ **Bridge**: Abstraction depend on Implementation interface
- ✅ **Adapter**: Client depend on Target interface
- ✅ **Observer**: Subject depend on Observer interface
- ✅ **Command**: Invoker depend on Command interface
- ✅ **Template Method**: Base class define abstraction, subclass inject details
- ✅ **Dependency Injection**: Core principle của nhiều patterns

**Ví dụ**:
```typescript
// Vi phạm DIP: Depend on concrete class
class UserService {
  private db = new MySQLDatabase() // Depend concrete!
}

// Đúng DIP: Depend on interface, inject dependency
interface Database {
  save(data: any): void
}
class UserService {
  constructor(private db: Database) {} // Depend abstraction!
}
// Inject: new UserService(new MySQLDatabase())
// Hoặc: new UserService(new MongoDatabase())
```

---

## Design Patterns vs OOP Concepts

### 1. Encapsulation (Đóng gói)
**Ẩn implementation details, chỉ expose interface**

**Patterns tăng cường Encapsulation**:
- ✅ **Singleton**: Private constructor, encapsulate instance creation
- ✅ **Factory Method**: Encapsulate object creation logic
- ✅ **Proxy**: Encapsulate access control
- ✅ **Facade**: Encapsulate subsystem complexity
- ✅ **Memento**: Encapsulate internal state
- ✅ **Iterator**: Encapsulate traversal mechanism
- ✅ **Template Method**: Encapsulate algorithm structure

---

### 2. Inheritance (Kế thừa)
**Subclass kế thừa properties/methods từ superclass**

**Patterns dùng Inheritance**:
- ✅ **Template Method**: Subclass override abstract methods
- ✅ **Factory Method**: Subclass override factory method
- ✅ **Decorator**: Decorator extends component behavior (prefer composition!)
- ✅ **Chain of Responsibility**: Handler hierarchy

**Lưu ý**: Nhiều patterns **favor Composition over Inheritance** (Strategy, Decorator, Bridge) để tăng flexibility.

---

### 3. Polymorphism (Đa hình)
**Cùng interface, nhiều implementations khác nhau**

**Patterns tận dụng Polymorphism**:
- ✅ **Strategy**: Swap strategies at runtime
- ✅ **State**: Swap states at runtime
- ✅ **Factory Method**: Return different product types
- ✅ **Abstract Factory**: Return different product families
- ✅ **Decorator**: Stack decorators polymorphically
- ✅ **Composite**: Treat leaf and composite uniformly
- ✅ **Visitor**: Double dispatch (visitor + element)
- ✅ **Command**: Execute different commands uniformly
- ✅ **Observer**: Notify different observers uniformly

---

### 4. Abstraction (Trừu tượng hóa)
**Ẩn complexity, chỉ hiển thị essential features**

**Patterns dùng Abstraction**:
- ✅ **Bridge**: Separate abstraction from implementation
- ✅ **Facade**: Provide high-level interface
- ✅ **Proxy**: Abstract access to real object
- ✅ **Adapter**: Abstract incompatible interface
- ✅ **Template Method**: Abstract algorithm structure
- ✅ **Factory Method**: Abstract object creation

---

### 5. Composition (Kết hợp)
**"Has-a" relationship: Object chứa objects khác**

**Patterns ưu tiên Composition**:
- ✅ **Strategy**: Context has-a Strategy
- ✅ **Decorator**: Decorator has-a Component
- ✅ **Composite**: Composite has-a list of Components
- ✅ **Bridge**: Abstraction has-a Implementation
- ✅ **Observer**: Subject has-a list of Observers
- ✅ **Command**: Invoker has-a Command, Command has-a Receiver
- ✅ **Flyweight**: Object has-a shared Flyweight

**Composition vs Inheritance**:
```typescript
// Inheritance (rigid): Class hierarchy
class Bird extends Animal {}
class FlyingBird extends Bird {} // Penguin sao?

// Composition (flexible): Strategy pattern
interface FlyBehavior { fly(): void }
class Bird {
  constructor(private flyBehavior: FlyBehavior) {}
}
class CanFly implements FlyBehavior {}
class CannotFly implements FlyBehavior {}
```

---

## Tổng kết: SOLID + OOP + Patterns

| SOLID Principle | OOP Concept | Key Patterns |
|----------------|-------------|--------------|
| **SRP** | Encapsulation | Strategy, Command, Iterator, Visitor |
| **OCP** | Polymorphism, Abstraction | Strategy, Decorator, Factory, Observer |
| **LSP** | Inheritance, Polymorphism | Strategy, Composite, Template Method |
| **ISP** | Abstraction | Adapter, Facade, Bridge |
| **DIP** | Abstraction, Composition | Strategy, Factory, Observer, Command |

**Quan điểm thiết kế**:
- **Favor Composition over Inheritance**: Strategy, Decorator, Bridge, Composite
- **Program to Interface, not Implementation**: Hầu hết các patterns
- **Encapsulate what varies**: Strategy, State, Template Method
- **Depend on Abstractions**: Factory, Strategy, Observer, Command

---

## Khi nào dùng pattern nào?

### Code smell → Pattern solution

| Problem (Code Smell) | SOLID vi phạm | Pattern giải quyết |
|---------------------|---------------|-------------------|
| **If/else dài theo type** | OCP, SRP | Strategy, State, Command |
| **If/else dài theo feature** | OCP | Decorator, Chain of Responsibility |
| **God class (làm quá nhiều việc)** | SRP | Facade, Mediator, Command |
| **Tight coupling** | DIP | Strategy, Observer, Mediator |
| **Duplicate code** | DRY | Template Method, Strategy |
| **Subclass explosion** | OCP | Bridge, Decorator, Strategy |
| **Complex object creation** | SRP | Factory, Builder, Prototype |
| **Fat interface** | ISP | Adapter, Facade |
| **Hardcoded dependencies** | DIP | Factory, Dependency Injection |
| **Global state** | Encapsulation | Singleton (cẩn thận!) |
| **Manual notification** | OCP | Observer |
| **Complex subsystem** | ISP, SRP | Facade |

---

## Quick Reference Card

**Tạo object tốt hơn** → Factory Method, Abstract Factory, Builder  
**Tránh if/else** → Strategy, State, Chain of Responsibility  
**Thêm tính năng không sửa code cũ (OCP)** → Decorator, Strategy, Observer  
**Giảm coupling (DIP)** → Strategy, Observer, Mediator, Command  
**Đơn giản hóa interface (ISP)** → Facade, Adapter  
**Tái sử dụng code** → Template Method, Prototype  
**Composition over Inheritance** → Strategy, Decorator, Bridge  
**Undo/Redo** → Command, Memento  
**Event-driven** → Observer  
**Lazy loading** → Proxy  
**Save memory** → Flyweight, Singleton
