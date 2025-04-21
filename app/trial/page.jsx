import React from 'react';

function Page() {
//   const notes = [
//     {
//       heading: "What is Object-Oriented Programming (OOP)?",
//       notes: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects'. These objects bundle data (attributes/properties) and code (methods/behaviors) that operate on that data. Instead of focusing solely on procedures or functions, OOP structures a program around objects that interact with each other. Think of it as modeling real-world or abstract entities within your software."
//     },
//     {
//       heading: "Why use OOP? (Benefits)",
//       notes: "OOP offers several advantages over procedural programming:\n*   **Modularity:** Programs are broken down into self-contained objects, making the code easier to manage, understand, and maintain.\n*   **Reusability:** Once a class is created, objects can be instantiated from it multiple times. Concepts like inheritance allow creating new classes based on existing ones, reusing code and reducing redundancy.\n*   **Maintainability:** Due to modularity, changes within one object/class have less impact on other parts of the system, simplifying updates and debugging.\n*   **Scalability:** OOP designs are generally easier to extend with new features or data types without disrupting existing code.\n*   **Data Hiding/Encapsulation:** Objects can hide their internal state and require all interaction to be performed through methods, protecting data integrity and preventing unintended modifications.\n*   **Collaboration:** Different developers can work on different classes/objects simultaneously with less interference."
//     },
//     {
//       heading: "Objects in the Real World and in Programming",
//       notes: "In the real world, an object is anything tangible or conceptual that has properties (state) and can perform actions (behavior). Examples: \n*   A **Car** has properties (color, model, make, current speed) and behaviors (start, accelerate, brake, turn).\n*   A **Dog** has properties (breed, name, age, color) and behaviors (bark, eat, sleep, wag tail).\nIn programming, an object is a self-contained unit that represents an instance of a class. It bundles:\n*   **State:** Data stored in variables (attributes/properties) that represent the object's characteristics at a specific time.\n*   **Behavior:** Actions performed by functions (methods) that define what the object can do or what can be done to it.\nAn object in code mirrors a real-world or abstract entity, holding its data and defining its capabilities."
//     },
//     {
//       heading: "Classes as Blueprints for Objects",
//       notes: "A class acts as a blueprint, template, or definition for creating objects. It specifies:\n*   **Attributes:** The common data fields (variables) that objects of this class will have (e.g., a `Car` class might define `color`, `model`, `maxSpeed` attributes).\n*   **Methods:** The common behaviors or actions (functions) that objects of this class can perform (e.g., `startEngine()`, `accelerate()` methods).\nThe class itself is not an object, but the plan. Creating an actual object based on the class definition is called **instantiation**. You can create multiple objects (instances) from the same class, each having its own unique values for its attributes (e.g., one red Ferrari object, one blue Ford object, both created from the `Car` class) but sharing the same structure and behaviors defined by the class."
//     },
//     {
//       heading: "Difference between Procedural and Object-Oriented approaches (Simple)",
//       notes: "**Procedural Programming:**\n*   **Focus:** On procedures (functions, routines, subroutines) - a sequence of steps to perform a task.\n*   **Data Organization:** Data and the functions that operate on the data are typically separate.\n*   **Data Access:** Often uses global data, which functions access and modify directly.\n*   **Structure:** Programs are generally seen as a list of instructions executed top-down (with function calls).\n*   **Example Languages:** C, Pascal, Fortran.\n\n**Object-Oriented Programming (OOP):**\n*   **Focus:** On 'objects' which bundle data (attributes) and behavior (methods) together.\n*   **Data Organization:** Data and the functions that operate on it are tightly coupled within objects.\n*   **Data Access:** Data is typically encapsulated (hidden) within objects, accessed and modified via the object's methods.\n*   **Structure:** Program structure is based on objects interacting with each other by calling methods.\n*   **Example Languages:** Java, C++, Python, C#.\n\n**Simple Distinction:** Procedural programming organizes programs around actions (functions), while OOP organizes programs around interacting entities (objects) that contain both data and actions."
//     }
//   ];

// const notes=[
//     {
//       "heading": "💡 What is Object-Oriented Programming (OOP)?",
//       "notes": "Object-Oriented Programming (OOP) is a way of thinking about and organizing code. Instead of just writing lists of instructions (like in procedural programming), OOP focuses on creating 'objects' 📦. Think of these objects as self-contained units that bundle together related data (attributes/properties) and actions (methods/behaviors) that work on that data. It's like modeling real-world things (like a car 🚗 or a bank account 💰) or abstract concepts directly in your code."
//     },
//     {
//       "heading": "🚀 Why use OOP? (Benefits)",
//       "notes": "OOP brings many advantages to software development:\n*   🧩 **Modularity:** Code is organized into distinct objects, making it easier to manage, understand, and troubleshoot. Like building with LEGO bricks!\n*   🔄 **Reusability:** Write a class (blueprint) once and create many objects from it. Inheritance allows building new classes based on existing ones, saving time and effort. Don't reinvent the wheel!\n*   🔧 **Maintainability:** Changes inside one object are less likely to break other parts of the program, making updates and bug fixes simpler.\n*   📈 **Scalability:** OOP designs are generally easier to expand with new features without messing up the existing structure.\n*   🔒 **Data Hiding (Encapsulation):** Objects can protect their internal data, allowing access or modification only through specific methods. This prevents accidental corruption and keeps data safe.\n*   🤝 **Collaboration:** Different developers can work on separate classes/objects simultaneously with fewer conflicts."
//     },
//     {
//       "heading": "🌍 Objects in the Real World and in Programming 💻",
//       "notes": "Look around! The world is full of objects. A **Dog** 🐕 is an object: \n    *   *State/Attributes:* breed, name, age, color, tail wagging?\n    *   *Behavior/Methods:* bark(), eat(), sleep(), wagTail()\nA **Smartphone** 📱 is an object:\n    *   *State/Attributes:* brand, model, battery level, screen on?\n    *   *Behavior/Methods:* makeCall(), sendText(), openApp(), charge()\n\nIn programming, an object is a specific instance created from a class. It holds its own values for the attributes defined in the class and can perform the actions (methods) defined by the class. It's a digital representation of a real-world or conceptual entity."
//     },
//     {
//       "heading": "🏗️ Classes as Blueprints for Objects",
//       "notes": "A class is like a blueprint, a template, or a cookie cutter 🍪 for creating objects. It defines:\n*   **Attributes:** What *kind* of data the objects will hold (e.g., a `Car` class might define `color`, `model`, `speed` attributes).\n*   **Methods:** What *actions* the objects can perform (e.g., `startEngine()`, `accelerate()`, `brake()` methods).\n\nThe class itself isn't the object; it's the *plan*. When you actually create an object based on the class, it's called **instantiation**. You can instantiate (create) many objects from one class, each with its own specific attribute values (like having many cookies from the same cutter, but maybe decorated differently!). Example: One `Car` object could be a red Ferrari, another a blue Ford – both created from the same `Car` class blueprint."
//     },
//     {
//       "heading": "↔️ Difference: Procedural vs. Object-Oriented (Simple)",
//       "notes": "**Procedural Programming (Think: Recipe 📜):**\n*   **Focus:** On procedures (functions/routines) - a sequence of steps to follow.\n*   **Data & Functions:** Often separate. Data might be global, and functions operate on it.\n*   **Structure:** Top-down execution of instructions, calling functions as needed.\n*   **Example Languages:** C, Pascal.\n\n**Object-Oriented Programming (Think: Interacting Agents 🤖):**\n*   **Focus:** On 'objects' that contain both data and the functions that operate on that data.\n*   **Data & Functions:** Bundled together within objects (encapsulation).\n*   **Structure:** Program runs by objects sending messages (calling methods) to each other.\n*   **Example Languages:** Java, C++, Python, C#.\n\n**Key Difference:** Procedural tells the computer *how* to do tasks step-by-step; OOP creates *objects* that are responsible for tasks and interact with each other."
//     }
//   ]

// const notes=[
//     {
//       "heading": "💡 **What is Object-Oriented Programming (OOP)?**",
//       "notes": "Object-Oriented Programming (OOP) is a programming style based on the idea of **objects** 📦.\nThink of it like building with digital LEGOs.\nInstead of just writing step-by-step instructions, OOP bundles data (**attributes** or properties) and the functions that work on that data (**methods** or behaviors) together into objects.\nIt helps model real-world things (like a car 🚗 or a user account👤) or abstract concepts within your code."
//     },
//     {
//       "heading": "🚀 **Why use OOP? (Benefits)**",
//       "notes": "OOP offers several cool advantages:\n*   **Modularity** 🧩: Code is organized into separate objects, making programs easier to understand, manage, and fix if something goes wrong.\n*   **Reusability** 🔄: You can create a blueprint (**class**) once and make many objects from it. Inheritance lets you reuse code from existing classes to make new ones. Write less, do more!\n*   **Maintainability** 🔧: Changes inside one object are less likely to break other parts of the program. This makes updates and fixing bugs much simpler.\n*   **Scalability** 📈: OOP makes it easier to add new features or handle more complexity as your program grows.\n*   **Data Hiding (Encapsulation)** 🔒: Objects can keep their internal details private and expose only what's necessary through methods. This protects data from accidental changes.\n*   **Collaboration** 🤝: Different programmers can work on different objects or classes at the same time more easily."
//     },
//     {
//       "heading": "🌍 **Objects in the Real World and in Programming** 💻",
//       "notes": "Objects are all around us!\nThink about a **Dog** 🐕:\n*   It has **attributes** (state): breed, name, age, color.\n*   It has **behaviors** (methods): bark(), eat(), sleep(), wagTail().\n\nIn programming, an **object** is a specific instance created from a class.\n*   It holds its own **data** (values for its attributes).\n*   It can perform **actions** (using its methods).\nIt's like a digital version of a real-world thing or concept, holding its own information and capabilities."
//     },
//     {
//       "heading": "🏗️ **Classes as Blueprints for Objects**",
//       "notes": "A **class** is like a blueprint, a recipe, or a cookie cutter 🍪 used to create objects.\nIt defines:\n*   **Attributes**: The *types* of data that objects of this class will have (e.g., a `User` class might define `username` and `email` attributes).\n*   **Methods**: The *actions* that objects of this class can perform (e.g., `login()`, `postMessage()` methods).\n\nThe class itself isn't an object, it's the **plan**. Creating an actual object from the class is called **instantiation** ✨.\nYou can create many **instances** (objects) from a single class, each with its own unique attribute values but sharing the same structure and behaviors defined by the class (e.g., many different `User` objects from the `User` class)."
//     },
//     {
//       "heading": "↔️ **Difference: Procedural vs. Object-Oriented (Simple)**",
//       "notes": "**Procedural Programming (Think: A Recipe 📜)**\n*   **Focus**: On procedures (functions or routines) that perform tasks step-by-step.\n*   **Data & Actions**: Data and the functions that operate on it are often separate.\n*   **Structure**: Program executes as a sequence of commands, calling functions along the way.\n*   **Examples**: C, Fortran, Pascal.\n\n**Object-Oriented Programming (Think: Interacting Mini-Programs 🤖)**\n*   **Focus**: On objects that bundle data and actions together.\n*   **Data & Actions**: Data (attributes) and functions (methods) are combined within objects (**Encapsulation**).\n*   **Structure**: Program runs by objects interacting with each other (sending messages or calling methods).\n*   **Examples**: Java, C++, Python, C#.\n\n**In simple terms**: Procedural focuses on *doing things* (actions/functions), while OOP focuses on creating *things* (objects) that have data and can do things."
//     }
//   ]


const notes=[
  {
    "heading": "💡 What is Object-Oriented Programming (OOP)?",
    "notes": "**Object-Oriented Programming (OOP)** is a way of thinking about and organizing code for computer programs.\n\n*   It's based on the concept of **objects** 📦.\n*   Think of objects as self-contained units that bundle together **data** (information) and **methods** (actions or functions that use the data).\n*   Instead of just writing procedures (lists of instructions), OOP involves creating objects that **interact** with each other to get the job done 🤝.\n*   It helps model real-world things directly into code!"
  },
  {
    "heading": "🤔 Why Use OOP? Benefits!",
    "notes": "OOP offers several advantages over older programming styles:\n\n*   **Reusability** ♻️: Once you create a blueprint (a Class), you can create many objects from it. You can also reuse classes in different parts of your program or even in other programs! Write code once, use it multiple times.\n*   **Modularity** 🧩: Programs are broken down into smaller, self-contained objects. This makes the code easier to understand, manage, and test. If something goes wrong, you often know which object to check! ✅\n*   **Maintainability** 🔧: Because of modularity, changes to one part of the code are less likely to break other parts. This makes updating and fixing software much easier and safer.\n*   **Scalability** 🌱: It's easier to add new features or components to an OOP program without disturbing the existing code. Just add new objects or classes!\n*   **Real-World Modeling** 🌍: OOP concepts map well to real-world entities and their interactions, making it more intuitive to design software for complex systems."
  },
  {
    "heading": "🐶 Objects in the Real World and in Programming 💻",
    "notes": "Objects are all around us!\n\n*   **Real World Examples**:\n    *   Your **dog** 🐕 is an object. It has **state** (data like name: 'Buddy', breed: 'Golden Retriever', color: 'Gold') and **behavior** (methods like `bark()`, `wagTail()`, `eat()`).\n    *   A **car** 🚗 is an object. State: color, model, speed. Behavior: `startEngine()`, `accelerate()`, `brake()`.\n\n*   **Programming Objects**:\n    *   In code, an object is a specific **instance** created from a class.\n    *   It holds its own **data** (values for its attributes/variables) in memory.\n    *   It can perform **actions** using its methods (functions associated with the object).\n    *   Example: If you have a `Car` class, `myTesla` and `yourFord` could be two different car objects, each with its own color and current speed, but both able to `accelerate()`."
  },
  {
    "heading": "🏗️ Classes as Blueprints for Objects 📄",
    "notes": "A **Class** is like a blueprint, a template, or a recipe for creating objects.\n\n*   It **defines** the structure and behavior that all objects of that type will have.\n*   It specifies:\n    *   **Attributes** (also called properties or instance variables): The data that objects of this class will hold (e.g., `color`, `name`, `age`).\n    *   **Methods** (also called functions or behaviors): The actions that objects of this class can perform (e.g., `startEngine()`, `bark()`, `calculateArea()`).\n*   **Analogy Time!** ✨\n    *   A cookie cutter is the **Class** 🍪. The cookies you make with it are the **Objects**. Each cookie is separate, but they all share the shape defined by the cutter.\n    *   An architect's blueprint is the **Class** 🏠. The houses built from that blueprint are the **Objects**.\n*   You only write the class **once**, but you can create **many** objects (instances) from it."
  },
  {
    "heading": "🚶‍♂️ vs 🧩 Difference: Procedural vs. Object-Oriented",
    "notes": "How does OOP differ from the older **Procedural Programming** style?\n\n*   **Procedural Programming**:\n    *   Focuses on **procedures** or functions (a sequence of steps) 📜.\n    *   Programs are often a list of instructions.\n    *   **Data** and the **functions** that operate on that data are typically kept **separate**.\n    *   Think of following a recipe step-by-step.\n    *   Examples: C, Fortran, Pascal.\n\n*   **Object-Oriented Programming (OOP)**:\n    *   Focuses on **objects** that bundle data and methods together 🎁.\n    *   Programs are collections of interacting objects.\n    *   **Data** and its associated **behavior** are **encapsulated** (kept together) within objects.\n    *   Think of building something complex with specialized LEGO blocks 🧱.\n    *   Examples: Java, Python, C++, C#.\n\n*   **Key Difference**: Procedural organizes code around **actions** (functions), while OOP organizes code around **things** (objects) that have both data and actions."
  }
]
  

  const parseText = (text) => {
    const lines = text.split('\n');
    const content = [];
    let listItems = [];

    const flushList = (isOrdered = false) => {
      if (listItems.length > 0) {
        const ListTag = isOrdered ? 'ol' : 'ul';
        content.push(
          <ListTag className="list-disc pl-5" key={`list-${content.length}`}>
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ListTag>
        );
        listItems = [];
      }
    };

    lines.forEach((line, i) => {
      const trimmed = line.trim();
      const bulletMatch = /^\*+\s(.*)/.exec(trimmed);

      const processBold = (str) => {
        const parts = [];
        const regex = /\*\*(.*?)\*\*/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(str)) !== null) {
          const [fullMatch, boldText] = match;
          const start = match.index;
          if (start > lastIndex) parts.push(str.slice(lastIndex, start));
          parts.push(<strong key={`bold-${start}`}>{boldText}</strong>);
          lastIndex = regex.lastIndex;
        }

        if (lastIndex < str.length) {
          parts.push(str.slice(lastIndex));
        }

        return parts;
      };

      if (bulletMatch) {
        listItems.push(processBold(bulletMatch[1]));
      } else {
        flushList(); // end previous list before normal text
        content.push(<div key={i}>{processBold(line)}</div>);
      }
    });

    flushList();
    return content;
  };

  return (
    <div className="p-4">
      {notes.map((note, index) => (
        <div className="mt-10 mb-5 m-5 bg-blue-100 p-3 rounded-lg" key={index}>
          <h2 className="font-bold text-lg mb-2">
            {index + 1}). {note.heading}
          </h2>
          <div className="space-y-2">{parseText(note.notes)}</div>
        </div>
      ))}
    </div>
  );
}

export default Page;
