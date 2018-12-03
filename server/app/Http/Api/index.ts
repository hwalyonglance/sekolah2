import { Router } from 'express'

import * as Class from './class.api'
import * as File from './file.api'
import * as Jurusan from './jurusan.api'
import * as Pelajaran from './pelajaran.api'
import * as Role from './role.api'
import * as Teacher from './teacher.api'
import * as User from './user.api'

const router: Router = Router()

router.use('/file',			File.router		)
router.use('/jurusan',		Jurusan.router	)
router.use('/klass',		Class.router	)
router.use('/pelajaran',	Pelajaran.router)
router.use('/role',			Role.router		)
router.use('/teacher',		Teacher.router	)
router.use('/user',			User.router		)

export {
	File,
	Jurusan,
	Class,
	Pelajaran,
	Role,
	Teacher,
	User,

	router
}
