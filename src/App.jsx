import React, { useState } from "react"
import { useLanguage } from './components/LanguageContext'

import TaskBox from "./components/TaskBox"

const App = () => {
		const {language, setLanguage} = useLanguage()

    const [taskList, setTaskList] = useState([])

		const handleLanguageChange = (event) => setLanguage(event.target.value)

    const onAddTaskButtonClick = event => {
      setTaskList(taskList.concat(<TaskBox key={taskList.length} step={taskList.length} />))
    }

    const submit = event => {
    }

    return (
      <>
        <div className="container card">
					<div className="card-body">
						<div className="row">
							<div className="col">
								<button onClick={onAddTaskButtonClick} type="button" className="btn btn-primary">
										New task

										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
												<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
										</svg>
								</button>
							</div>

							<div className="col-6"></div>

							<div className="col">
								<select  value={language} onChange={handleLanguageChange} className="form-select">
									<option value="" selected disabled>Choose a language</option>
									<option value="enUS" selected>EN</option>
									<option value="frFR">FR</option>
									<option value="esES">ES</option>
									<option value="deDE">DE</option>
								</select>
							</div>
						</div>
					</div>
        </div>

        <br />

        {taskList}

        <div className="container card">
            <div className="card-body">
                <button onClick={submit} type="button" className="btn btn-primary">
                    Copy event key to clipboard
                </button>
            </div>
        </div>
      </>
    )
}

export default App